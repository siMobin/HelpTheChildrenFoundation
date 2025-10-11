<?php

namespace App\Http\Controllers;

use PDF;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function downloadPdf(Student $record)
    {
        $pdf = PDF::loadView('pdf.student', ['student' => $record]);
        return $pdf->download('student-' . $record->student_id . '.pdf');
    }

    public function getAllStudents()
    {
        // select selective columns
        $students = Student::select(
            'id',
            'photo_path',
            'name',
            'gender',
            'class',
            'roll',
            'campus',
        )
            ->where('sponsor_no', null)
            ->get();
        return \response()->json($students);
    }
}
