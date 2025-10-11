<?php

namespace App\Filament\Resources\Sponsors\Schemas;

use App\Models\Sponsor;
use App\Models\Student;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextArea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\MultiSelect;

class SponsorForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1) // Set the main schema to a single column
            ->components([
                Section::make(__('Personal Information')) // Start Sponsor Personal Info Section
                    ->schema([

                        TextInput::make('sponsor_no')
                            ->label(__('Sponsor No'))
                            ->required(),
                        TextInput::make('sponsor_name')
                            ->label(__('Sponsor Name'))
                            ->required(),
                        Select::make('gender')
                            ->options([
                                'male' => __('Male'),
                                'female' => __('Female'),
                            ])
                            ->label(__('Gender'))
                            ->required(),
                        Select::make('type')
                            ->options([
                                'individual' => __('Individual'),
                                'organization' => __('Organization'),
                            ])
                            ->label(__('Sponsor Type (Individual/Organization)'))
                            ->required(),
                        TextInput::make('facebook_id')
                            ->label(__('Facebook ID')),
                        DatePicker::make('birth_date')
                            ->label(__('Birth Date'))
                            ->required(),
                        TextInput::make('occupation')
                            ->label(__('Occupation')),
                        TextInput::make('workplace')
                            ->label(__('Workplace')),
                        TextInput::make('designation')
                            ->label(__('Designation')),
                        TextInput::make('nationality')
                            ->label(__('Nationality'))
                            ->required(),
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
                            ->addActionLabel(__('Add another phone number')),
                        Repeater::make('emails')
                            ->relationship()
                            ->label(__('Emails'))
                            ->schema([
                                TextInput::make('email')
                                    ->label(__('Email'))
                                    ->email()
                                    ->columns(1)
                                    ->required(),
                            ])
                            ->defaultItems(1)
                            ->addActionLabel(__('Add another email address')),
                        TextArea::make('present_address')
                            ->label(__('Present Address'))
                            ->required(),
                        TextArea::make('permanent_address')
                            ->label(__('Permanent Address')),
                    ])->columns(2), // End Sponsor Info Section


                Section::make(__('Sponsorship Details')) // Start Student Info Section
                    ->columns(1)
                    ->schema([
                        // Students info
                        /**
                         * WHO THE FUCK WRITE CODE LIKE THIS!
                         */
                        // Allow selecting one or more students to attach to this sponsor.
                        // We use a MultiSelect that holds student ids. The page handlers
                        // (Create/Edit) will sync the students' sponsor_no after save.
                        MultiSelect::make('student_ids')
                            ->label(__('Students'))
                            ->options(function (\Filament\Schemas\Components\Utilities\Get $get) {
                                $query = Student::query();

                                // Get currently selected student IDs from the form state
                                $currentSelectedStudentIds = $get('student_ids') ?? [];

                                // When editing, the route may include the record id.
                                $routeRecord = request()->route('record');
                                if ($routeRecord) {
                                    // Try to resolve sponsor_no for this sponsor record id
                                    $sponsor = \App\Models\Sponsor::find($routeRecord);
                                    if ($sponsor) {
                                        $query->where(function ($q) use ($sponsor, $currentSelectedStudentIds) {
                                            $q->whereNull('sponsor_no')
                                                ->orWhere('sponsor_no', $sponsor->sponsor_no)
                                                ->orWhereIn('id', $currentSelectedStudentIds); // Ensure currently selected are always included
                                        });
                                    } else {
                                        // If sponsor not found, only show unsponsored or currently selected
                                        $query->where(function ($q) use ($currentSelectedStudentIds) {
                                            $q->whereNull('sponsor_no')
                                                ->orWhereIn('id', $currentSelectedStudentIds);
                                        });
                                    }
                                } else {
                                    // For creation, only show unsponsored or currently selected
                                    $query->where(function ($q) use ($currentSelectedStudentIds) {
                                        $q->whereNull('sponsor_no')
                                            ->orWhereIn('id', $currentSelectedStudentIds);
                                    });
                                }

                                return $query->orderBy('name')->pluck('name', 'id')->toArray();
                            })
                            ->preload()
                            ->searchable()
                            ->multiple(),
                        Select::make('payment_interval')
                            ->options([
                                'monthly' => __('Monthly'),
                                'yearly' => __('Yearly'),
                                'half_yearly' => __('Half Yearly'),
                            ])
                            ->label(__('Payment Interval')),
                        Select::make('payment_method')
                            ->options([
                                'bKash' => __('bKash'),
                                'Nagad' => __('Nagad'),
                                'Rocket' => __('Rocket'),
                                'Cash' => __('Cash'),
                                'Bank Transfer' => __('Bank Account (BRAC, SCBK)'),
                            ])
                            ->label(__('Payment Method')),
                        Select::make('communication_details')
                            ->options([
                                'social Media' => __('Social Media'),
                                'HCF Sponsor' => __('HCF sponsor'),
                                'HCF Employee' => __('HCF Employee'),
                                'HCF Volunteer' => __('HCF Volunteer'),
                                'Other' => __('Other'),
                            ])
                            ->label(__('Where did you hear about HCF (Help the Children Foundation) first?'))
                            ->required(),
                        Select::make('visited')
                            ->options([
                                'yes' => __('Yes'),
                                'no' => __('No'),
                            ])
                            ->label(__('Do you visit to Daily Ten School?'))
                            ->required(),
                        TextArea::make('motive')
                            ->required()
                            ->label(__('What motivated you to sponsor a child?')),
                        Select::make('recommendation')
                            ->options([
                                'Yes, I will tell my friends/family/colleagues' => __('Yes, I will tell my friends/family/colleagues'),
                                'I might' => __('I might'),
                                'No' => __('No'),
                            ])
                            ->label(__('Would you recommend your friends/family/colleagues to SPONSOR A CHILD?')),
                    ])->columns(2), // End Student Info Section
            ]);
    }
}
