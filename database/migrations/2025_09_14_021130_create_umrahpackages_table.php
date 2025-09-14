<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('umrahPackages', function (Blueprint $table) {
            $table->id();
            $table->dateTime('flight_date');
            $table->dateTime('return_date');
            $table->string('from_city');
            $table->string('to_city');
            $table->string('price');
            $table->string('package_name')->nullable();
            $table->string('package_description');
            $table->string('package_image')->nullable();
            $table->string('package_status');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('umrahPackages');
    }
};
