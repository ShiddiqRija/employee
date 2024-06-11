<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employee_employments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->references('id')->on('employees')->onDelete('cascade')->onUpdate('cascade');
            $table->string('employee_number', 50);
            $table->enum('employment_status', ['internship', 'probation', 'contract', 'permanent']);
            $table->date('join_date');
            $table->date('resign_date')->nullable();
            $table->enum('branch', ['head office', 'branch office']);
            $table->string('job_position', 100);
            $table->enum('job_level', ['intern', 'staff', 'manager', 'director']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_employments');
    }
};
