<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index()
    {
        return Inertia::render('Services');
    }

    public function newService()
    {
        return Inertia::render('services/NewService');
    }

    public function domestic()
    {
        return Inertia::render('services/Domestic');
    }

    public function commercial()
    {
        return Inertia::render('services/Commercial');
    }

    public function gutter()
    {
        return Inertia::render('services/Gutter');
    }

    public function soffitFascia()
    {
        return Inertia::render('services/SoffitFascia');
    }
}
