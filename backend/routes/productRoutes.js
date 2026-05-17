const express = require('express');

const router = express.Router();

const {
    addProduct,
    getProducts
} = require('../controllers/productController');



// ADD PRODUCT
router.post('/add', addProduct);



// VIEW PRODUCTS
router.get('/', getProducts);



module.exports = router;