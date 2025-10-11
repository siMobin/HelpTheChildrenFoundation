<?php

return [
	'mode'                  => 'utf-8',
	'format'                => 'A4',
	'author'                => '',
	'subject'               => '',
	'keywords'              => '',
	'creator'               => 'Laravel Pdf',
	'display_mode'          => 'fullpage',
	'tempDir'               => base_path('../temp/'),
	'pdf_a'                 => false,
	'pdf_a_auto'            => false,
	'icc_profile_path'      => '',
	'font_path' => base_path('public/fonts/'),
	'font_data' => [
		'nikosh' => [
			'R'  => 'Nikosh.ttf',    // regular
			'B'  => 'Nikosh.ttf',    // optional: bold
			'I'  => 'Nikosh.ttf',    // optional: italic
			'BI' => 'Nikosh.ttf',    // optional: bold-italic
			'useOTL' => 0xFF,
			'useKashida' => 75,
		]
	]
];
