<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('students/{record}/pdf/download', [StudentController::class, 'downloadPdf'])->name('student.pdf.download');

Route::get('api/students/unsponsored', [\App\Http\Controllers\StudentController::class, 'getAllStudents']);
