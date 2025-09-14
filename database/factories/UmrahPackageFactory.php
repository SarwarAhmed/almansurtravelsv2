<?php

namespace Database\Factories;

use App\Models\UmrahPackage;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class UmrahPackageFactory extends Factory
{
    protected $model = UmrahPackage::class;

    public function definition(): array
    {
        return [
            'flight_date' => Carbon::now(),
            'return_date' => Carbon::now(),
            'flight_airport' => $this->faker->word(),
            'return_airport' => $this->faker->word(),
            'price' => $this->faker->word(),
            'package_name' => $this->faker->name(),
            'package_description' => $this->faker->text(),
            'package_image' => $this->faker->word(),
            'package' => $this->faker->word(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
