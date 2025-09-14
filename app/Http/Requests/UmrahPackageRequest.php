<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UmrahPackageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'flight_date' => ['required', 'date'],
            'return_date' => ['required', 'date'],
            'flight_airport' => ['required'],
            'return_airport' => ['required'],
            'price' => ['nullable'],
            'package_name' => ['required'],
            'package_description' => ['required'],
            'package_image' => ['required'],
            'package' => ['required'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
