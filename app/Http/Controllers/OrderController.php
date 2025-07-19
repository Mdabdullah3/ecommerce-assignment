<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
            'cart' => 'required|array',
            'payment_method' => 'required|string',
        ]);

        $total = collect($request->cart)->sum(function ($item) {
            return $item['price'] * $item['quantity'];
        });
        $order = Order::create([
            'customer_name' => $request->customer_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'total' => $total,
            'payment_method' => $request->payment_method,

        ]);
        foreach ($request->cart as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'product_name' => $item['name'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'subtotal' => $item['price'] * $item['quantity'],
                'image' => $item['image'] ?? null,
            ]);
        }
        return response()->json([
            'message' => 'Order placed successfully!',
            'order_id' => $order->id
        ], 201);
    }
    public function index()
    {
        $orders = Order::with('items')->latest()->get();
        return Inertia::render('orders/index', [
            'orders' => $orders
        ]);
    }
    public function showConfirmation($orderId)
    {
        $order = Order::where('id', $orderId)->first();

        return Inertia::render('order-confirmation', [
            'order' => $order->load('items'),
            'status' => session('status'),
        ]);
    }
    public function updateStatus(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:Pending,Processing,Delivered']);
        $order = Order::findOrFail($id);
        $order->update(['status' => $request->status]);
        return redirect()->back()->with('success', 'Order status updated!');
    }
}
