<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name('home');

Route::get('/carts', function () {
    return Inertia::render('carts');
})->name('carts');
Route::get('/whishlist', function () {
    return Inertia::render('wishlist');
})->name('wishlist');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
