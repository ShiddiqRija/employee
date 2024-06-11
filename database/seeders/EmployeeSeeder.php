<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\EmployeeEmployment;
use App\Models\EmployeeIdentityAddress;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create('id_ID');

        foreach (range(1, 200) as $index) {
            $gender = $faker->randomElement(['male', 'female']);
            $firstName = $faker->firstName($gender);
            $lastName = $faker->lastName();
            $email = strtolower($firstName . '.' . $lastName) . '@dummy.com';

            $employee = Employee::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $email,
                'phone' => $faker->phoneNumber(),
                'place_of_birth' => $faker->city(),
                'birth_date' => $faker->date(),
                'gender' => $gender,
                'marital_status' => $faker->randomElement(['single', 'married', 'widow', 'widower']),
                'religion' => $faker->randomElement(['islam', 'catholic', 'cristian', 'buddha', 'hindu', 'confucius', 'other']),
            ]);

            EmployeeIdentityAddress::create([
                'employee_id' => $employee->id,
                'ktp' => $faker->nik(),
                'postal_code' => $faker->postcode(),
                'citizen_id_address' => $faker->address(),
                'residential_address' => null,
            ]);

            EmployeeEmployment::create([
                'employee_id' => $employee->id,
                'employee_number' => 'EMP-' .$employee->id,
                'employment_status' => $faker->randomElement(['internship', 'probation', 'contract', 'permanent']),
                'join_date' => $faker->dateTimeThisDecade('+2 years'),
                'resign_date' => null,
                'branch' => $faker->randomElement(['head office', 'branch office']),
                'job_position' => $faker->jobTitle(),
                'job_level' => $faker->randomElement(['intern', 'staff', 'manager', 'director']),
            ]);
        }
    }
}
