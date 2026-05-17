require('dotenv').config();
const pool = require('../config/db');

const createTables = async () => {
    try {

        // USERS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                user_id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                phone VARCHAR(15)
            )
        `);

        console.log("Users table created");


        // PRODUCTS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
                product_id SERIAL PRIMARY KEY,
                title VARCHAR(200) NOT NULL,
                category VARCHAR(100),
                price NUMERIC(10,2) NOT NULL,
                description TEXT,
                image TEXT,
                stock INT DEFAULT 0
            )
        `);

        console.log("Products table created");


        // CART TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS cart (
                cart_id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users(user_id),
                product_id INT REFERENCES products(product_id),
                quantity INT DEFAULT 1
            )
        `);

        console.log("Cart table created");


        // ORDERS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                order_id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users(user_id),
                total_amount NUMERIC(10,2),
                order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status VARCHAR(50) DEFAULT 'Pending'
            )
        `);

        console.log("Orders table created");


        // ORDER_ITEMS TABLE
        await pool.query(`
            CREATE TABLE IF NOT EXISTS order_items (
                item_id SERIAL PRIMARY KEY,
                order_id INT REFERENCES orders(order_id),
                product_id INT REFERENCES products(product_id),
                quantity INT,
                subtotal NUMERIC(10,2)
            )
        `);

        console.log("Order items table created");

        console.log("All tables created successfully");

    } catch (err) {
        console.log(err);
    }
};

createTables();