<?php

namespace App\Filament\Resources\Sponsors\Tables;

use Filament\Tables\Table;
use Filament\Actions\EditAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\MultiSelect;

class SponsorsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sponsor_no')
                    ->label(__('Sponsor No'))
                    ->searchable(),
                TextColumn::make('sponsor_name')
                    ->label(__('Sponsor Name'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('gender')
                    ->label(__('Gender'))
                    ->sortable(),
                TextColumn::make('type')
                    ->label(__('Sponsor Type'))
                    ->sortable(),
                TextColumn::make('facebook_id')
                    ->label(__('Facebook ID'))
                    ->searchable(),
                TextColumn::make('phoneNumbers.phone_number')
                    ->label(__('Phone Number'))
                    ->listWithLineBreaks()
                    ->limitList(1)
                    ->expandableLimitedList()
                    ->searchable()
                    ->copyable(),
                TextColumn::make('emails.email')
                    ->label(__('Email Address'))
                    ->listWithLineBreaks()
                    ->limitList(1)
                    ->expandableLimitedList()
                    ->searchable()
                    ->copyable(),
                TextColumn::make('birth_date')
                    ->label(__('Date of Birth'))
                    ->date()
                    ->sortable(),
                TextColumn::make('occupation')
                    ->label(__('Occupation'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('workplace')
                    ->label(__('Workplace'))
                    ->searchable(),
                TextColumn::make('designation')
                    ->sortable()
                    ->label(__('Designation'))
                    ->searchable(),
                TextColumn::make('nationality')
                    ->label(__('Nationality'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('present_address')
                    ->label(__('Present Address'))
                    ->searchable(),
                TextColumn::make('permanent_address')
                    ->label(__('Permanent Address'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('students.full_name_with_id')
                    ->label(__('Sponsored Students'))
                    ->listWithLineBreaks()
                    ->limitList(1)
                    ->expandableLimitedList()
                    ->searchable(),
                TextColumn::make('payment_interval')
                    ->sortable()
                    ->label(__('Payment Interval')),
                TextColumn::make('payment_method')
                    ->label(__('Payment Method'))
                    ->sortable(),
                TextColumn::make('communication_details')
                    ->label(__('Communication Details'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('visited')
                    ->label(__('Visited'))
                    ->sortable(),
                TextColumn::make('motive')
                    ->label(__('Motive'))
                    ->searchable(),
                TextColumn::make('recommendation')
                    ->label(__('Recommendation'))
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label(__('Created At'))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label(__('Updated At'))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
