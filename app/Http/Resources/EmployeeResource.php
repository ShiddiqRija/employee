<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'fullname' => $this->first_name . ' ' . $this->last_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'place_of_birth' => $this->place_of_birth,
            'birth_date' => $this->birth_date,
            'gender' => $this->gender,
            'marital_status' => $this->marital_status,
            'religion' => $this->religion,
            'ktp' => $this->identity_address->ktp,
            'postal_code' => $this->identity_address->postal_code,
            'citizen_id_address' => $this->identity_address->citizen_id_address,
            'residential_address' => $this->identity_address->residential_address,
            'employee_number' => $this->employment->employee_number,
            'employment_status' => $this->employment->employment_status,
            'join_date' => $this->employment->join_date,
            'resign_date' => $this->employment->resign_date,
            'branch' => $this->employment->branch,
            'job_position' => $this->employment->job_position,
            'job_level' => $this->employment->job_level,
        ];
    }
}
