<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class UmrahController extends Controller
{
    public function create()
    {
        return Inertia::render('umrah/create');
    }
}
