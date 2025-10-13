<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;

class AppInfoWidget extends Widget
{
    protected static ?int $sort = -3;
    protected string $view = 'filament.widgets.app-info-widget';
}
