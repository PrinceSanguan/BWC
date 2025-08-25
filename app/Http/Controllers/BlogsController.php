<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogsController extends Controller
{
    /**
     * Display the blogs page.
     */
    public function index()
    {
        // Render the Inertia Blogs page (resources/js/pages/Blogs.tsx)
        return Inertia::render('Blogs');
    }
}
