<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    protected $fillable = [
        'sponsor_no',
        'sponsor_starting_date',
        'photo_path',
        'student_id',
        'dropped_out',
        'name',
        'gender',
        'class',
        'roll',
        'weight',
        'height',
        'birth_date',
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'family_members',
        'other_guardian',
        'permanent_address',
        'present_address',
        'campus',
        'comment',
        'blood_group',
    ];

    // Automatically include this in API JSON
    protected $appends = ['photo_url', 'full_name_with_id'];

    public function getPhotoUrlAttribute()
    {
        if (!$this->photo_path) return null;

        // If you store files on public disk:
        return Storage::disk('public')->url($this->photo_path);

        // If you want signed URLs (private disk / Filament default):
        // return Storage::disk('public')->temporaryUrl(
        //     $this->photo_path,
        //     now()->addMinutes(60)
        // );
    }

    public function getFullNameWithIdAttribute(): string
    {
        return "{$this->name} ({$this->student_id})";
    }

    public function phoneNumbers(): HasMany
    {
        return $this->hasMany(StudentPhoneNumber::class);
    }

    public function sponsor(): BelongsTo
    {
        return $this->belongsTo(Sponsor::class, 'sponsor_no', 'sponsor_no');
    }

    /**
     * Boot and register model event listeners.
     */
    protected static function booted(): void
    {
        static::saving(function (Student $student) {
            // If sponsor_no changed (set or cleared), manage sponsor_starting_date automatically
            if ($student->isDirty('sponsor_no')) {
                $new = $student->getAttribute('sponsor_no');

                if ($new) {
                    // When assigning a sponsor, set starting date if not already provided
                    if (empty($student->getAttribute('sponsor_starting_date'))) {
                        $student->setAttribute('sponsor_starting_date', now()->toDateString());
                    }
                } else {
                    // When removing sponsor, clear starting date
                    $student->setAttribute('sponsor_starting_date', null);
                }
            }
        });
    }
}
