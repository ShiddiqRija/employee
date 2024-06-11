<h1 align="center">
    Employee Data
</h1>

<!-- Link Demo Section -->

## 🚀 [Demo →](https://test.shiddiqrija.com)

<!-- Introduction Section -->

## 📖 Introduction

This application intended for technical tests

<!-- Features Section -->

## 🌟 Features

This project features all the latest tools and good practices in web development!

### Framework

-   🌅 **[Laravel](https://laravel.com)** – A complete PHP framework.
-   ⚛️ **[Inertia](https://inertiajs.com)** – Bridges the gap between Laravel application and React frontend.

### Package

#### Starter Kit

-   🔐 **[Laravel/Breeze](https://laravel.com/docs/11.x/starter-kits#laravel-breeze)** - Breeze provides a minimal and simple starting point for building a Laravel application with authentication.

#### Data Faker

-   📝 **[FakerPHP/Faker](https://fakerphp.org/)** - aker is a PHP library that generates fake data for you.

### Design System and Animations

-   🎨 **[Tailwind](https://tailwindcss.com/)** - A utility-first CSS framework packed with classes
-   🎨 **[Shadcn UI](https://ui.shadcn.com/)** – Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
-   ✨ **[Lucide](https://lucide.dev/)** – Beautiful & consistent icons Made by the community.

## ▶️ Getting Started

Before you use this repository, make sure you have PHP 8.2 and NodeJS v18

### 🛠️ Installation

1. Clone this repository to your local machine:

```bash
 $ git clone https://github.com/ShiddiqRija/employee.git
```

2. Move yourself to the root of the project:

```bash
 $ cd employee
```

3. Install all depedencies of the project:

```bash
 #For laravel depedencies
 $ composer install
 #For React depedencies
 $ npm install
```

4. Do database migration

```bash
 #For laravel depedencies
 $ composer install
 #For React depedencies
 $ npm install
```

or you can import sql file in root of the project into your mysql server

5. Make sure the database name in .env is the same as the one on the mysql server

```bash
 DB_CONNECTION=mysql
 DB_HOST=127.0.0.1
 DB_PORT=3306
 DB_DATABASE=dev_employee
 DB_USERNAME=root
 DB_PASSWORD=
```

### ⌨️ Development

Once all dependencies have been installed, you can run the local development server:

```bash
 $ npm run dev
```

### ⌨️ Development

After applying the changes, you can generate a build to test and/or deploy to your production environment.

Make a production build:

```bash
 $ npm run build
```