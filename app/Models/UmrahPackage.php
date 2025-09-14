<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UmrahPackage extends Model
{
    use HasFactory;

    protected function casts(): array
    {
        return [
            'flight_date' => 'datetime',
            'return_date' => 'datetime',
        ];
    }
}
