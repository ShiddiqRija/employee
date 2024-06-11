<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeCollection;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Models\EmployeeEmployment;
use App\Models\EmployeeIdentityAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Employee/Index', [
            'employees' => new EmployeeCollection(
                Employee::query()
                    ->filter(FacadesRequest::only('search'))
                    ->paginate(FacadesRequest::input('show', 10))
            )
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Employee/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeRequest $request)
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            $employee = Employee::create($validated);

            EmployeeIdentityAddress::create([
                'employee_id' => $employee->id,
                'ktp' => $request->ktp,
                'postal_code' => $request->postal_code,
                'citizen_id_address' => $request->citizen_id_address,
                'residential_address' => $request->idresidential_address,
            ]);

            EmployeeEmployment::create([
                'employee_id' => $employee->id,
                'employee_number' => $request->employee_number,
                'employment_status' => $request->employment_status,
                'join_date' => $request->join_date,
                'resign_date' => $request->resign_date,
                'branch' => str_replace('-', ' ',$request->branch),
                'job_position' => $request->job_position,
                'job_level' => $request->job_level,
            ]);

            DB::commit();

            return Redirect::route('employee.show', [$employee->id])->with('message', 'Employee saved!');
        } catch (\Exception $ex) {
            Log::error('Insert Employee data failed', ['exception' => $ex]);

            DB::rollBack();

            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return Inertia::render('Employee/Show', [
            'employee' => new EmployeeResource($employee)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        return Inertia::render('Employee/Edit', [
            'employee' => $employee->load('identity_address', 'employment')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeRequest $request, Employee $employee)
    {
        try {
            DB::beginTransaction();

            $validated = $request->validated();

            $employee->update($validated);

            $employee->identity_address()->update([
                'ktp' => $request->ktp,
                'postal_code' => $request->postal_code,
                'citizen_id_address' => $request->citizen_id_address,
                'residential_address' => $request->idresidential_address,
            ]);

            $employee->employment()->update([
                'employee_number' => $request->employee_number,
                'employment_status' => $request->employment_status,
                'join_date' => $request->join_date,
                'resign_date' => $request->resign_date,
                'branch' => str_replace('-', ' ',$request->branch),
                'job_position' => $request->job_position,
                'job_level' => $request->job_level,
            ]);

            DB::commit();

            return Redirect::route('employee.show', [$employee->id])->with('message', 'Employee updated!');
        } catch (\Exception $ex) {
            Log::error('Update employee data failed', ['exception' => $ex]);

            DB::rollBack();

            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        try {
            DB::beginTransaction();

            $employee->delete();

            DB::commit();

            return Redirect::route('employee.index')->with('message', 'Employee deleted!');
        } catch (\Exception $ex) {
            Log::error('Delete employee data failed', ['exception' => $ex]);

            DB::rollBack();

            return back();
        }
    }
}
