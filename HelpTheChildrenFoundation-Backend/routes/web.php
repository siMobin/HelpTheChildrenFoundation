<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StudentController;
use App\Http\Controllers\BkashTokenizePaymentController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('students/{record}/pdf/download', [StudentController::class, 'downloadPdf'])->name('student.pdf.download');

// API
Route::get('api/sponsor/search', [BkashTokenizePaymentController::class, 'searchSponsor']);
Route::get('api/students/unsponsored', [\App\Http\Controllers\StudentController::class, 'getAllStudents']);
