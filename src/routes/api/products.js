'use strict';

var _index = require('../../app/products/index.js');

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.get('/products', _index.findAll);
router.get('/products/category/:id', _index.categoryProducts);
router.get('/products/sub/category/:id', _index.subCategoryProducts);
router.get('/offer/products', _index.offerProducts);
router.get('/featured/products', _index.featuredProducts);
router.post('/selected/product', _index.selected_product);
router.post('/products/update/images', _index.update_images);
router.post('/products/edit/offer', _index.edit_offer);
router.post('/products/edit/featured', _index.edit_featured);
router.post('/product/insert', _index.create_product);
router.post('/product/edit', _index.updateProduct);
router.post('/products/delete', _index.deleteProduct);
router.post('/product/edit/feature', _index.updateFeature);
router.post('/product/save/feature', _index.saveFeature);
router.post('/product/qty/edit', _index.updateQty);
router.post('/product/update/main/:id', _index.updateMainImage);
router.post('/products/out/of/stock', _index.outOfStock);
router.post('/products/in/stock', _index.inStock);
router.post('/products/delete/feature', _index.deleteFeature);
router.post('/products/deactivate', _index.deactivate);
router.post('/products/activate', _index.activate);
module.exports = router;


