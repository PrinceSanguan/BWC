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
        return response()->json(\App\Models\Blog::all());
    }
}
