<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'iPhone 14',
                'description' => 'Latest Apple iPhone with A15 chip.',
                'price' => 1200.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_26_a_1-570x760.jpg',
            ],
            [
                'name' => 'Samsung Galaxy S23',
                'description' => 'Flagship Android phone from Samsung.',
                'price' => 999.99,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_17_a_1-570x760.jpg',
            ],
            [
                'name' => 'Sony WH-1000XM4',
                'description' => 'Industry-leading noise cancelling headphones.',
                'price' => 350.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_16_a_4-570x760.jpg',
            ],
            [
                'name' => 'Dell XPS 13',
                'description' => 'Powerful ultrabook with stunning display.',
                'price' => 1300.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_34_a_2-570x760.jpg',
            ],
            [
                'name' => 'Apple Watch Series 9',
                'description' => 'Smartwatch with health tracking features.',
                'price' => 399.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_37_b_2-570x760.jpg',
            ],
            [
                'name' => 'Amazon Echo Dot',
                'description' => 'Smart speaker with Alexa.',
                'price' => 49.99,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_6-570x760.jpg',
            ],
            [
                'name' => 'Canon EOS M50',
                'description' => 'Mirrorless camera for creators.',
                'price' => 700.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_31_a_1-1-450x600.jpg',
            ],
            [
                'name' => 'ASUS ROG Strix',
                'description' => 'Gaming laptop with high performance GPU.',
                'price' => 1600.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_15_a_1-450x600.jpg',
            ],
            [
                'name' => 'Nike Air Max',
                'description' => 'Comfortable running shoes.',
                'price' => 120.00,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_30_b_1-600x784.jpg',
            ],
            [
                'name' => 'Kindle Paperwhite',
                'description' => 'E-reader with adjustable warm light.',
                'price' => 129.99,
                'image' => 'https://minimog-4437.kxcdn.com/wp-content/uploads/2021/12/product_fashion_13_b_1-450x600.jpg',
            ],
        ];
        Product::insert($products);
    }
}
