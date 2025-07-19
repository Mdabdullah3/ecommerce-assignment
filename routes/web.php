<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [ProductController::class, 'index'])->name('home');
// carts
Route::get('/carts', function () {
    return Inertia::render('carts');
})->name('carts');
// whishlist
Route::get('/whishlist', function () {
    return Inertia::render('wishlist');
})->name('wishlist');
// checkout
Route::get('/checkout', function () {
    return Inertia::render('checkout');
})->name('checkout');

// orders routes
Route::get('/order-confirmation/{order}', [OrderController::class, 'showConfirmation'])->name('order-confirmation');
Route::put('/orders/{id}/status', [OrderController::class, 'updateStatus'])->name('orders.updateStatus');
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');

// Dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
