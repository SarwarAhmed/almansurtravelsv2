<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UmrahPackage extends Model
{
    use HasFactory, SoftDeletes;

    protected function casts(): array
    {
        return [
            'flight_date' => 'datetime',
            'return_date' => 'datetime',
        ];
    }
}
