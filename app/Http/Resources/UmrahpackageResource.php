<?php

namespace App\Http\Resources;

use App\Models\UmrahPackage;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin UmrahPackage */
class UmrahpackageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'flight_date' => $this->flight_date,
            'return_date' => $this->return_date,
            'from_city' => $this->from_city,
            'to_city' => $this->to_city,
            'price' => $this->price,
            'package_name' => $this->package_name,
            'package_description' => $this->package_description,
            'package_image' => $this->package_image,
            'package_status' => $this->package_status,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
