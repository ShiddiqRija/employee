<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use Faker\Factory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/test', function () {
        $faker = Factory::create('id_ID');

        $dateTime = $faker->dateTimeThisDecade('+2 years');
        echo $dateTime->format('Y-m-d H:i:s');
    });

    Route::resource('employee', EmployeeController::class);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
