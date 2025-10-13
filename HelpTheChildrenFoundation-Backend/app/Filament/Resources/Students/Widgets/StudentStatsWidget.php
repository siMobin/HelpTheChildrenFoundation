<?php

namespace App\Filament\Resources\Students\Widgets;

use App\Models\Sponsor;
use App\Models\Student;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StudentStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make(__('Total Students'), Student::count()),
            Stat::make(__('Unsponsored Students'), Student::whereNull('sponsor_no')->count()),
            Stat::make(__('Total Sponsor(s)'), Sponsor::count()),
        ];
    }
}
