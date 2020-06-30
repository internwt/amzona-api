// add product,get product,edit prduct for admin , delete product for admin

import express from 'express'
import Controller from './productController'
const app = express.Router({ mergeParams: true });
// add new product 
app.post('/product',Controller.addProduct)
// get a single product by id
app.get('/product/:productId',Controller)
// update single product by id
app.patch('/product/:proudctId',Controller)
// delete a single product or multiple productsbyid
app.delete('/delete')


module.exports = app