<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Student Information</title>
    <style>
        html,
        body {
            height: 100%;
            /* Assuming this height is intended for PDF page size */
            width: 100%;
            margin: 0;
            padding: 0;
        }

        body {

            /* Keep the red border for visibility */
            font-family: 'nikosh', sans-serif;
            height: 100%;
            /* Ensure body takes full height */
            width: 100%;
            margin: 0;
            /* Ensure no default margin */
            padding: 0;
            /* Ensure no default padding */
            position: relative;
        }

        .wrapper {
            position: fixed;
            top: 20%;
            transform: translateY(-50%);
        }

        .header-table {
            width: 100%;
            margin-bottom: 8px;
        }

        .header-table td {
            vertical-align: middle;
        }

        .student-photo {
            width: 45mm;
            height: 55mm;
            /* aspect-ratio: 11/9; */
            border: 1px solid #000;
            object: cover;
        }

        .title {
            text-align: center;
            font-size: 24px;
            margin: 0;
        }


        .student-info {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .student-info th,
        .student-info td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
            white-space: nowrap;
        }

        .comments-section h4 {
            margin-top: 20px;
            margin-bottom: 10px;
        }

        .comment_box,
        th {
            background-color: rgb(208, 232, 249);
            padding: 8px 4px;
        }
    </style>
</head>

<body>
    <img src="{{ public_path('images/pdf-bg.svg') }}"
        style="position: absolute; top: 0; left: 0; width: 2480px; height: 3508px; z-index: -1; scale: 1.5;"
        alt="Background Image">

    <div class="wrapper">
        <table class="header-table">
            <tr>
                <td>
                    {{-- <h2 class="title">ছাত্র/ছাত্রীর পরিচিতি</h2> --}}
                </td>
                <td style="text-align: right;">
                    <img src="{{ storage_path('app/public/' . $student->photo_path) }}" class="student-photo"
                        alt="Student Photo">
                </td>
            </tr>
        </table>

        <span>{{__('Student ID')}}: {{ $student->student_id }}</span>

        <table class="student-info" style="width: 100%;">
            <tbody>
                <tr>
                    <th>{{ __('Name') }}:</th>
                    <td>{{ $student->name }}</td>
                    <th>{{ __('Age') }}:</th>
                    <td>{{ \Carbon\Carbon::parse($student->birth_date)->age }}</td>

                </tr>
                <tr>
                    <th>{{ __('Class') }}:</th>
                    <td>{{ $student->class }}</td>
                    <th>{{ __('Family Members') }}:</th>
                    <td>{{ $student->family_members }}</td>
                </tr>
                <tr>
                    <th>{{ __('Father Name') }}:</th>
                    <td>{{ $student->father_name }}</td>
                    <th>{{ __('Occupation') }}:</th>
                    <td>{{ $student->father_occupation }}</td>
                </tr>
                <tr>
                    <th>{{ __('Mother Name') }}:</th>
                    <td>{{ $student->mother_name }}</td>
                    <th>{{ __('Occupation') }}:</th>
                    <td>{{ $student->mother_occupation }}</td>
                </tr>
                <tr>
                    <th>{{ __('Other Guardian Name') }}:</th>
                    <td>{{ $student->guardian_name ?? 'N/A' }}</td>
                    <th>{{ __('Relationship') }}:</th>
                    <td>{{ $student->guardian_relation ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <th>{{ __('Present Address') }}:</th>
                    <td colspan="3">{{ $student->current_address }}</td>
                </tr>
                <tr>
                    <th>{{ __('Permanent Address') }}:</th>
                    <td colspan="3">{{ $student->permanent_address }}</td>
                </tr>
            </tbody>
        </table>

        <div class="comments-section">
            <h4>{{ __('Comments') }}:</h4>
            <p class="comment_box">{{ $student->comment }}</p>
        </div>
    </div>
</body>

</html>