# E-Commerce Cart & Checkout System

### Overview

This project is a full-stack e-commerce application built with Laravel as the backend, ReactJS as the frontend (using Inertia.js), and MySQL as the database. The system combines the power of Laravel and React into a single unified application through Inertia.js, providing a seamless development experience.

<img src="/public/home.png" width="800" alt="Home Page Screenshot" />


### Key Features

- Integrated Stack: Single application using Inertia.js to bridge Laravel and React

- Product Management: Browse, add to cart, and checkout products

- User Authentication: Protected routes for dashboard and order management

- Modern UI: Built with Tailwind CSS and React components

- Persistent Cart: LocalStorage implementation for cart persistence


### Technologies Used

- Backend: Laravel 12 with Inertia.js server-side adapter

- Frontend: React 19 with Inertia.js client-side adapter

- Styling: Tailwind CSS

- Database: MySQL

- Authentication: Laravel Breeze (for Inertia.js)

- Zustand: State Management

### Installation Guide

Prerequisites

- PHP 8.1+

- Composer

- Node.js 18+

- npm

- MySQL 5.7+

- XAMPP/WAMP/LAMP stack for MySQL

### Setup Instructions (Single Application)

1. Clone the repository

```
git clone https://github.com/Mdabdullah3/ecommerce-assignment.git

cd ecommerce-assignment

```

2. Install PHP dependencies

```
composer install

```

3. Install JavaScript dependencies

```
npm install

```
4. Environment Configuration

Copy .env.example to .env and configure:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce_db
DB_USERNAME=root
DB_PASSWORD=

```

5. Generate application key

```
php artisan key:generate

```

6. Database Setup

- Start your XAMPP/WAMP MySQL server

- Create a database named ecommerce_db

- Run migrations and seeders:

```
php artisan migrate

php artisan db:seed --class=ProductSeeder

```

7. Start Development Server

```
composer run dev

```

### Accessing the Application

1. The application will be available at http://localhost:8000

2. First, register a new user account

3. Browse products and test the cart functionality

### Why Inertia.js?

This project uses Inertia.js to combine Laravel and React into a single application because:

1. Unified Codebase: No separation between frontend and backend projects

2. Simplified Routing: Use Laravel's routing for both backend and frontend

3. Shared Authentication: Laravel's session-based auth works seamlessly

4. Efficient Data Loading: No need to create separate API endpoints for basic operations

5. Faster Development: Reduced context switching between frontend/backend

### Project Structure (Inertia.js Version)

```
ecommerce-assignment/
├── app/                  # Laravel application logic
├── database/             # Migrations and seeders
├── node_modules/         # Frontend dependencies
├── public/               # Compiled assets
├── resources/
│   ├── js/               # React components
│   │   ├── Components/   # Shared components
│   │   ├── Layouts/      # Application layouts
│   │   ├── Pages/        # Inertia page components
│   │   └── app.js        # Main Inertia app
├── routes/               # Web routes (Inertia handles these)
├── .env.example          # Environment template
└── package.json          # Frontend dependencies and scripts
```

### Key Implementation Notes

1. Authentication: Uses Laravel Breeze Inertia stack for authentication

2. Cart Persistence: Implemented using localStorage for guest users

3. Admin Dashboard: Accessible at /dashboard after login

4. Order Management: Admin can update order statuses


This single-application approach with Inertia.js provides a more streamlined development workflow while maintaining all the benefits of using React for the frontend and Laravel for the backend.