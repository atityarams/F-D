const pool = require('../config/db');


// ADD PRODUCT
const addProduct = async (req, res) => {

    try {

        const {
            title,
            category,
            price,
            description,
            image,
            stock
        } = req.body;


        const result = await pool.query(

            `
            INSERT INTO products
            (title, category, price, description, image, stock)

            VALUES
            ($1, $2, $3, $4, $5, $6)

            RETURNING *;
            `,

            [
                title,
                category,
                price,
                description,
                image,
                stock
            ]

        );

        res.status(201).json({

            message: "Product Added Successfully",

            product: result.rows[0]

        });

    }

    catch (err) {

        console.log(err.message);

        res.status(500).json({
            error: "Server Error"
        });

    }

};



// VIEW PRODUCTS
const getProducts = async (req, res) => {

    try {

        const result = await pool.query(

            `
            SELECT * FROM products
            ORDER BY product_id ASC;
            `
        );

        res.status(200).json(result.rows);

    }

    catch (err) {

        console.log(err.message);

        res.status(500).json({
            error: "Server Error"
        });

    }

};


module.exports = {

    addProduct,
    getProducts

};  