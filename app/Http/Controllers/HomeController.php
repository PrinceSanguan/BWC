<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Welcome');
    }
    public function about()
    {
        return Inertia::render('pages/About');
    }

    public function services()
    {
        return Inertia::render('pages/Services');
    }

    public function team()
    {
        return Inertia::render('pages/Team');
    }

    public function contact()
    {
        return Inertia::render('pages/Contact');
    }
}
