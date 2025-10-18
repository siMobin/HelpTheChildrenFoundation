# Help The Children Foundation - Developer README

This document provides instructions for setting up and running the Help The Children Foundation project for development purposes. The project is divided into two main parts: a Next.js frontend and a Laravel backend.

## Project Structure

- `HelpTheChildrenFoundation/`: Contains the Next.js frontend application.
- `HelpTheChildrenFoundation-Backend/`: Contains the Laravel backend application (Admin Panel & API).

---

## Frontend (Next.js)

The frontend is a [Next.js](https://nextjs.org/) application.

### Getting Started

1.  **Navigate to the frontend directory:**

    ```bash
    cd HelpTheChildrenFoundation
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Backend (Laravel)

The backend is a [Laravel](https://laravel.com/) application.

### Getting Started

1.  **Navigate to the backend directory:**

    ```bash
    cd HelpTheChildrenFoundation-Backend
    ```

2.  **Install dependencies:**

    ```bash
    composer install
    ```

3.  **Create a `.env` file:**
    Copy the `.env.example` file to a new file named `.env`.

    ```bash
    cp .env.example .env
    ```

4.  **Generate an application key:**

    ```bash
    php artisan key:generate
    ```

5.  **Run database migrations:**
    Make sure you have a database configured in your `.env` file.

    ```bash
    php artisan migrate
    ```

6.  **Run the development server:**
    ```bash
    php artisan serve
    ```

The backend API will be available at [http://localhost:8000](http://localhost:8000).

---
