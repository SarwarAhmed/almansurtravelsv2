<?php

namespace App\Http\Controllers;

use App\Http\Requests\UmrahPackageRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UmrahController extends Controller
{
    public function create()
    {
        return Inertia::render('umrah/create');
    }

    public function store(UmrahPackageRequest $request)
    {
        $umrah = $request->validated();
        dd($umrah);
    }
}
