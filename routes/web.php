<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProductController::class, 'index'])->name('home');

Route::get('/carts', function () {
    return Inertia::render('carts');
})->name('carts');
Route::get('/whishlist', function () {
    return Inertia::render('wishlist');
})->name('wishlist');
Route::get('/checkout', function () {
    return Inertia::render('checkout');
})->name('checkout');

Route::get('/order-confirmation/{order}', [OrderController::class, 'showConfirmation'])->name('order-confirmation');

Route::get('/admin/orders', [OrderController::class, 'index'])->name('admin.orders');
Route::put('/admin/orders/{id}/status', [OrderController::class, 'updateStatus'])->name('admin.orders.updateStatus');
Route::post('/orders', [OrderController::class, 'store']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
