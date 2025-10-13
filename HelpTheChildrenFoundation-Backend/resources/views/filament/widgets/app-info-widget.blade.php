@php
$app_name = config('app.name');
$app_url = config('app.url');

@endphp
<x-filament-widgets::widget class="fi-filament-info-widget">
    <x-filament::card>
        <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; flex-direction: row; gap: 1em; align-items: center">
                <a href="{{ $app_url }}" rel="noopener noreferrer" target="_blank">
                    <img src="{{ asset('/icon.svg') }}" alt="{{ $app_name }} Logo" style="height: 3em;" />
                </a>

                <a href="{{ $app_url }}" rel="noopener noreferrer" target="_blank">
                    <img src="{{ asset('/logo_text_bottom_color.svg') }}" alt="{{ $app_name }} Logo"
                        style="height: 2.5em;" />
                </a>
            </div>

            <div class="flex flex-col items-end gap-y-1">
                {{-- <x-filament::link color="gray" href="{{ $app_url }}" icon="heroicon-m-book-open"
                    icon-alias="panels::widgets.filament-info.open-documentation-button" rel="noopener noreferrer"
                    target="_blank">
                    {{ $app_name }}
                </x-filament::link>
                <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Version {{ $version }}
                </p> --}}
            </div>
        </div>
    </x-filament::card>
</x-filament-widgets::widget>