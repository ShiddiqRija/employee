<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'place_of_birth',
        'birth_date',
        'gender',
        'marital_status',
        'religion',
    ];

    public function identity_address()
    {
        return $this->hasOne(EmployeeIdentityAddress::class, 'employee_id');
    }

    public function employment()
    {
        return $this->hasOne(EmployeeEmployment::class, 'employee_id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('id', 'like', "%{$search}%");
        });
    }
}
