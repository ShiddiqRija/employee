<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EmployeeCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->first_name . ' ' . $item->last_name,
                'email' => $item->email,
                'employee_number' => $item->employment->employee_number,
                'branch' => $item->employment->branch,
                'job_position' => $item->employment->job_position,
                'job_level' => $item->employment->job_level,
                'employment_status' => $item->employment->employment_status,
            ];
        });
    }
}
