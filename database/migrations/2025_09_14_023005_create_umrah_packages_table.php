<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('umrah_packages', function (Blueprint $table) {
            $table->id();
            $table->dateTime('flight_date');
            $table->dateTime('return_date');
            $table->string('flight_airport');
            $table->string('return_airport');
            $table->string('price')->nullable();
            $table->string('package_name');
            $table->text('package_description');
            $table->string('package_image');
            $table->string('package');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('umrah_packages');
    }
};
