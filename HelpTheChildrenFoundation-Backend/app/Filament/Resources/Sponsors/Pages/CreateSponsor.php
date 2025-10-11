<?php

namespace App\Filament\Resources\Sponsors\Pages;

use App\Models\Student;
use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\Sponsors\SponsorResource;

/**
 * @property \Filament\Forms\Form $form
 * @property \App\Models\Sponsor $record
 */
class CreateSponsor extends CreateRecord
{
    protected static string $resource = SponsorResource::class;

    /**
     * When creating a sponsor, sync selected students (student_ids) to set their sponsor_no.
     */
    public function afterCreate(): void
    {
        // Parent might not implement afterCreate as public, call if available.
        if (method_exists(get_parent_class($this), 'afterCreate')) {
            parent::afterCreate();
        }

        $this->syncSelectedStudents();
    }

    protected function syncSelectedStudents(): void
    {
        $data = $this->form->getState();

        $studentIds = $data['student_ids'] ?? [];

        // If no sponsor_no present on the record, nothing to sync.
        /** @var \App\Models\Sponsor $sponsor */
        $sponsor = $this->record;
        if (! $sponsor || empty($sponsor->sponsor_no)) {
            return;
        }

        // Assign selected students to this sponsor_no
        if (! empty($studentIds)) {
            Student::whereIn('id', $studentIds)->update(['sponsor_no' => $sponsor->sponsor_no]);
        }
    }
}
