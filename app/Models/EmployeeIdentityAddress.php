<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeIdentityAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'ktp',
        'postal_code',
        'citizen_id_address',
        'residential_address',
    ];
}
