require('dotenv').config();

const pool = require('../config/db');

const viewProducts = async () => {

    try {

        const result = await pool.query(

            `
            SELECT * FROM products
            ORDER BY product_id ASC;
            `
            
        );

        console.log("Products Retrieved Successfully");

        console.log(result.rows);

    }

    catch (err) {

        console.log(err.message);

    }

};

viewProducts();