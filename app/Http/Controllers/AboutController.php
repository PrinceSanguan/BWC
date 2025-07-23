<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        return Inertia::render('About');
    }

    public function team()
    {
        return Inertia::render('Team');
    }
}
