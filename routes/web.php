<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\GuestMiddleware;


/*
|--------------------------------------------------------------------------
| This controller handles the homepage and other public-facing pages that don't require authentication
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\HomeController;


Route::get('/', [HomeController::class, 'index'])->name('home');
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\TestimonialsController;
use App\Http\Controllers\AreasController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;

Route::get('/services', [ServicesController::class, 'index']);
Route::get('/services/domestic', [ServicesController::class, 'domestic']);
Route::get('/services/commercial', [ServicesController::class, 'commercial']);
Route::get('/services/gutter', [ServicesController::class, 'gutter']);
Route::get('/services/soffit-fascia', [ServicesController::class, 'soffitFascia']);

Route::get('/testimonials', [TestimonialsController::class, 'index']);

Route::get('/areas', [AreasController::class, 'index']);
Route::get('/areas/south', [AreasController::class, 'south']);
Route::get('/areas/east', [AreasController::class, 'east']);
Route::get('/areas/central', [AreasController::class, 'central']);
Route::get('/areas/north', [AreasController::class, 'north']);

Route::get('/about', [AboutController::class, 'index']);
Route::get('/team', [AboutController::class, 'team']);

Route::get('/contact', [ContactController::class, 'index']);

/*
|--------------------------------------------------------------------------
| This controller handles Login Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\LoginController;

Route::get('login', [LoginController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.login');
Route::post('login', [LoginController::class, 'store'])->name('auth.login.store');
Route::get('logout', [LoginController::class, 'destroy'])->name('auth.logout');

/*
|--------------------------------------------------------------------------
| This controller handles Google Auth Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\SocialAuthController;

Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

/*
|--------------------------------------------------------------------------
| This controller handles Register Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\RegisterController;


Route::get('register', [RegisterController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.register');

/*
|--------------------------------------------------------------------------
| This controller handles All Admin Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Middleware\AdminMiddleware;

Route::middleware([AdminMiddleware::class])->group(function () {

  // Dashboard
  Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

  // Settings
  Route::get('admin/settings', [SettingsController::class, 'index'])->name('admin.settings');
  Route::put('admin/settings/profile', [SettingsController::class, 'updateProfile'])->name('admin.settings.updateProfile');
  Route::put('admin/settings/password', [SettingsController::class, 'updatePassword'])->name('admin.settings.updatePassword');
});

/*
|--------------------------------------------------------------------------
| This controller handles All User Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserSettingsController;
use App\Http\Middleware\UserMiddleware;

Route::middleware([UserMiddleware::class])->group(function () {

  // Dashboard
  Route::get('dashboard', [UserDashboardController::class, 'index'])->name('user.dashboard');

  // Settings
  Route::get('user/settings', [UserSettingsController::class, 'index'])->name('user.settings');
  Route::put('user/settings/profile', [UserSettingsController::class, 'updateProfile'])->name('user.settings.updateProfile');
  Route::put('user/settings/password', [UserSettingsController::class, 'updatePassword'])->name('user.settings.updatePassword');
});
