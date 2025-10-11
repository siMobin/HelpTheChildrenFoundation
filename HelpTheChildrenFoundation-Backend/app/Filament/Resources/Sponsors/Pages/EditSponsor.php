<?php

namespace App\Filament\Resources\Sponsors\Pages;

use App\Models\Student;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\Sponsors\SponsorResource;

/**
 * @property \Filament\Forms\Form $form
 * @property \App\Models\Sponsor $record
 */
class EditSponsor extends EditRecord
{
    protected static string $resource = SponsorResource::class;

    public function mount(string|int $record): void
    {
        parent::mount($record);

        // Let parent::mount populate the form with the sponsor's data.
        // Only pre-fill the students multi-select here.
        if ($this->record && $this->record->sponsor_no) {
            $studentIds = Student::where('sponsor_no', $this->record->sponsor_no)->pluck('id')->toArray();

            // Merge existing form state with student_ids so we don't overwrite the main fields
            $currentState = $this->form->getState();
            $currentState['student_ids'] = $studentIds;
            $this->form->fill($currentState);
        }
    }

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    public function afterSave(): void
    {
        // Call parent if available
        if (method_exists(get_parent_class($this), 'afterSave')) {
            parent::afterSave();
        }

        $this->syncSelectedStudents();
    }

    protected function syncSelectedStudents(): void
    {
        $data = $this->form->getState();
        $selected = $data['student_ids'] ?? [];

        /** @var \App\Models\Sponsor $sponsor */
        $sponsor = $this->record;
        if (! $sponsor) return;

        $sponsorNo = $sponsor->sponsor_no;

        // Assign selected students
        if (! empty($selected)) {
            Student::whereIn('id', $selected)->update(['sponsor_no' => $sponsorNo]);
        }

        // Clear sponsor_no from students that were previously assigned to this sponsor but were unselected
        Student::where('sponsor_no', $sponsorNo)
            ->whereNotIn('id', $selected ?: [0])
            ->update(['sponsor_no' => null]);
    }
}
