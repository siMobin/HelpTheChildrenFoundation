<?php

namespace App\Models;

use App\Models\Student;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sponsor extends Model
{
    protected $fillable = [
        'sponsor_no',
        'sponsor_name',
        'gender',
        'type',
        'facebook_id',
        'birth_date',
        'occupation',
        'workplace',
        'designation',
        'nationality',
        'present_address',
        'permanent_address',
        'payment_interval',
        'payment_method',
        'communication_details',
        'visited',
        'motive',
        'recommendation',
    ];

    public function phoneNumbers(): HasMany
    {
        return $this->hasMany(SponsorPhoneNumber::class);
    }

    public function emails(): HasMany
    {
        return $this->hasMany(SponsorEmail::class);
    }

    public function students(): HasMany
    {
        return $this->hasMany(Student::class, 'sponsor_no', 'sponsor_no');
    }
}
