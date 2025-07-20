<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function index(): Response
    {
        $products = Product::all();
        return Inertia::render('welcome', [
            'products' => $products,
        ]);
    }
    public function create(): Response
    {
        return Inertia::render('products/create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|string',
        ]);
        Product::create($validated);
        return Inertia::render('products/create', [
            'success' => 'Product created successfully!'
        ]);
    }
}
