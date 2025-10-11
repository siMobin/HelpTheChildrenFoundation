<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DateTimePicker;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label(__('Name'))
                    ->required(),
                TextInput::make('email')
                    ->label(__('Email Address'))
                    ->email()
                    ->required(),
                DateTimePicker::make('email_verified_at')
                    ->readOnly()
                    ->label(__('Email Verified At')),
                TextInput::make('password')
                    ->password()
                    ->nullable()
                    ->label(__('Password'))
                    ->required(fn(string $operation): bool => $operation === 'create')
                    ->dehydrated(fn($state) => filled($state)), // Only save if user typed something
            ]);
    }
}
