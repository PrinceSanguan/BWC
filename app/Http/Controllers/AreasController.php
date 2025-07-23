<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AreasController extends Controller
{
    public function index() {
        return Inertia::render('Areas');
    }
    public function south() {
        return Inertia::render('Areas/South');
    }
    public function east() {
        return Inertia::render('Areas/East');
    }
    public function central() {
        return Inertia::render('Areas/Central');
    }
    public function north() {
        return Inertia::render('Areas/North');
    }
}
