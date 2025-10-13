<?php

namespace App\Filament\Resources\Students\Tables;

use App\Models\Student;
use Filament\Tables\Table;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\EditAction;
use App\Models\StudentPhoneNumber;
use Filament\Actions\BulkActionGroup;
use Filament\Forms\Components\Select;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Illuminate\Database\Eloquent\Collection;

class StudentsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sponsor_no')
                    ->copyable()
                    ->sortable()
                    ->searchable()
                    ->label(__('Sponsor No')),
                ImageColumn::make('photo_path')
                    ->disk('public')
                    ->searchable()
                    ->label(__('Photo Path')),
                TextColumn::make('student_id')
                    ->sortable()
                    ->searchable()
                    ->label(__('Student Id')),

                TextColumn::make('name')
                    ->sortable()
                    ->searchable()
                    ->label(__('Student Name')),
                TextColumn::make('gender')
                    ->sortable()
                    ->searchable()
                    ->label(__('Gender')),
                TextColumn::make('class')
                    ->sortable()
                    ->searchable()
                    ->label(__('Class')),
                TextColumn::make('roll')
                    ->numeric()
                    ->sortable()
                    ->label(__('Roll No')),
                TextColumn::make('campus')
                    ->sortable()
                    ->label(__('Campus')),
                TextColumn::make('dropped_out')
                    ->sortable()
                    ->searchable()
                    ->label(__('Dropped Out')),
                TextColumn::make('weight')
                    ->searchable()
                    ->label(__('Weight (kg)')),
                TextColumn::make('height')
                    ->searchable()
                    ->label(__('Height (cm)')),
                TextColumn::make('birth_date')
                    // ->numeric()
                    ->label(__('Birth Date'))
                    ->sortable()
                    ->formatStateUsing(function ($state) {
                        if (!$state) return '-';
                        $date = \Carbon\Carbon::parse($state);
                        return $date->format('m/d/Y') . ' (' . $date->age . ' Years)';
                    }),
                TextColumn::make('blood_group')
                    ->label(__('Blood Group')),
                TextColumn::make('father_name')
                    ->searchable()
                    ->label(__('Father Name')),
                TextColumn::make('father_occupation')
                    ->searchable()
                    ->label(__('Father Occupation')),
                TextColumn::make('mother_name')
                    ->searchable()
                    ->label(__('Mother Name')),
                TextColumn::make('mother_occupation')
                    ->searchable()
                    ->label(__('Mother Occupation')),
                TextColumn::make('family_members')
                    ->numeric()
                    ->sortable()
                    ->label(__('Family Members')),
                TextColumn::make('phoneNumbers.phone_number')
                    ->label(__('Phone Number'))
                    ->listWithLineBreaks()
                    ->limitList(1)
                    ->expandableLimitedList()
                    ->searchable()
                    ->copyable(),
                TextColumn::make('other_guardian')
                    ->searchable()
                    ->label(__('Other Guardian Name')),
                TextColumn::make('comment')
                    ->label(__('Comment')),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->label(__('Created At'))
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->label(__('Updated At'))
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                Action::make('download')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->url(function ($record) {
                        if ($record instanceof StudentPhoneNumber) {
                            return route('student.pdf.download', $record->student);
                        }

                        return route('student.pdf.download', $record);
                    }),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('change_class')
                        ->label(__('Change Class'))
                        ->icon('heroicon-m-pencil-square')
                        ->form([
                            Select::make('class')
                                ->options([
                                    'শিশু' => __('শিশু'),
                                    'শিশু-খ' => __('শিশু-খ'),
                                    'প্রথম' => __('প্রথম'),
                                    'দ্বিতীয়' => __('দ্বিতীয়'),
                                    "তৃতীয়" => __('তৃতীয়'),
                                    'চতুর্থ' => __('চতুর্থ'),
                                    'পঞ্চম' => __('পঞ্চম'),
                                    'ষষ্ঠ' => __('ষষ্ঠ'),
                                    'সপ্তম' => __('সপ্তম'),
                                    'অষ্টম' => __('অষ্টম'),
                                ])
                                ->required(),
                        ])
                        ->action(function (Collection $records, array $data) {
                            $records->each->update(['class' => $data['class']]);
                        }),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
