require('dotenv').config();

const pool = require('../config/db');

const addProduct = async () => {

    try {

        const result = await pool.query(

            `
            INSERT INTO products
            (title, category, price, description, image, stock)

            VALUES
            ($1, $2, $3, $4, $5, $6)

            RETURNING *;
            `,

            [
                "Aaswitha Painting",
                "Painting",
                250000,
                "Unique handmade Aaswitha artwork",
                "Aaswitha.jpg",
                5
            ]

        );

        console.log("Product Added Successfully");

        console.log(result.rows);

    }

    catch (err) {

        console.log(err.message);

    }

};

addProduct();