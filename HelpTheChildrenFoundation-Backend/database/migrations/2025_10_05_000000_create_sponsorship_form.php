<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sponsors', function (Blueprint $table) {
            $table->id();

            $table->string('sponsor_no')->unique()->nullable();
            $table->string('sponsor_name');
            $table->string('gender');
            // individual or organization
            $table->string('type');
            $table->string('facebook_id')->nullable();
            $table->date('birth_date')->nullable();
            $table->string('occupation')->nullable();
            $table->string('workplace')->nullable();
            $table->string('designation')->nullable();
            $table->string('nationality')->nullable();
            $table->string('present_address')->nullable();
            $table->string('permanent_address')->nullable();
            $table->string('payment_interval')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('communication_details')->nullable();
            $table->string('visited')->nullable();
            $table->string('motive')->nullable();
            $table->string('recommendation')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sponsors');
    }
};
