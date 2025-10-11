<?php

namespace App\Filament\Resources\Students\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;

class StudentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('student_id')
                    ->label(__('Student Id')),
                // ->required(),
                TextInput::make('sponsor_no')
                    ->label(__('Sponsor No')),
                TextInput::make('name')
                    ->label(__('Student Name'))
                    ->required(),
                Select::make('gender')
                    ->options([
                        'male' => __('Male'),
                        'female' => __('Female'),
                    ])
                    ->label(__('Gender'))
                    ->required(),
                // TODO
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
                    ->label(__('Class')),
                TextInput::make('roll')
                    ->numeric()
                    ->label(__('Roll No')),
                // TextInput::make('campus'),
                Select::make('campus')
                    ->options([
                        'badda' => __('Badda Campus'),
                        'basabo' => __('Basabo Campus'),
                        'nandipara' => __('Nandipara Campus'),
                        'madaripur' => __('Madaripur Campus'),
                    ])
                    ->label(__('Campus'))
                    ->required(),
                TextInput::make('dropped_out')
                    ->label(__('Dropped Out')),
                TextInput::make('weight')
                    ->label(__('Weight (kg)')),
                TextInput::make('height')
                    ->label(__('Height (cm)')),
                DatePicker::make('birth_date')
                    ->label(__('Birth Date'))
                    ->required(),
                // TextInput::make('blood_group'),
                Select::make('blood_group')
                    ->options([
                        'A+' => 'A+',
                        'A-' => 'A-',
                        'B+' => 'B+',
                        'B-' => 'B-',
                        'AB+' => 'AB+',
                        'AB-' => 'AB-',
                        'O+' => 'O+',
                        'O-' => 'O-',
                    ])
                    ->label(__('Blood Group')),
                TextInput::make('father_name')
                    ->label(__('Father Name'))
                    ->required(),
                TextInput::make('father_occupation')
                    ->label(__('Father Occupation')),
                TextInput::make('mother_name')
                    ->label(__('Mother Name'))
                    ->required(),
                TextInput::make('mother_occupation')
                    ->label(__('Mother Occupation')),
                TextInput::make('family_members')
                    ->label(__('Family Members'))
                    ->required()
                    ->numeric()
                    ->default(0),
                Repeater::make('phoneNumbers')
                    ->relationship()
                    ->label(__('Phone Numbers'))
                    ->schema([
                        TextInput::make('phone_number')
                            ->label(__('Phone Number'))
                            ->tel()
                            ->columns(1)
                            ->required(),
                    ])
                    ->defaultItems(1)
                    ->addActionLabel(__('Add another phone number'))
                // ->columnSpanFull()
                ,
                TextInput::make('other_guardian')
                    ->label(__('Other Guardian Name')),
                Textarea::make('comment')
                    ->label(__('Comment'))
                    ->columnSpanFull(),
                Textarea::make('present_address')
                    ->label(__('Present Address'))
                    ->required(),
                Textarea::make('permanent_address')
                    ->label(__('Permanent Address')),
                FileUpload::make('photo_path')
                    ->disk('public')
                    ->directory('students')
                    ->visibility('public')
                    ->label(__('Photo Path')),
            ]);
    }
}
