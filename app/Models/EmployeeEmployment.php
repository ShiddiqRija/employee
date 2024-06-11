<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeEmployment extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'employee_number',
        'employment_status',
        'join_date',
        'resign_date',
        'branch',
        'job_position',
        'job_level',
    ];
}
