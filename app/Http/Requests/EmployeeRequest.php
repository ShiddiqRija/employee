<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    // public function authorize(): bool
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:50'],
            'last_name' => ['required', 'string', 'max:150'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:150'],
            'phone' => ['nullable', 'string', 'max:25'],
            'place_of_birth' => ['required', 'string', 'max:100'],
            'birth_date' => ['required', 'date'],
            'gender' => ['required', 'in:male,female'],
            'marital_status' => ['required', 'in:single,married,widow,widower'],
            'religion' => ['required', 'in:islam,catholic,cristian,buddha,hindu,confucius,other'],
            'ktp' => ['nullable', 'string', 'max:16'],
            'postal_code' => ['nullable', 'string', 'max:10'],
            'citizen_id_address' => ['nullable', 'string'],
            'residential_address' => ['nullable', 'string'],
            'employee_number' => ['required', 'max:50'],
            'employment_status' => ['required', 'in:internship,probation,contract,permanent'],
            'join_date' => ['required', 'date'],
            'resign_date' => ['nullable', 'date'],
            'branch' => ['required', 'in:head-office,branch-office'],
            'job_position' => ['required', 'string', 'max:100'],
            'job_level' => ['required', 'in:intern,staff,manager,director'],
        ];
    }
}
