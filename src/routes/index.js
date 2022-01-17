const { Router } = require('express');
const {getProduct,postProduct,deleteProduct,putProduct} =require('./../routes/controllers/index.js')

const routes = new Router();

// Add routes
 routes.get('/',getProduct);
 routes.post('/',postProduct);
 routes.delete('/',deleteProduct);
 routes.put('/',putProduct);
 
 

module.exports = routes;
