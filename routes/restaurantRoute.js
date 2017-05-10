'use strict'

const {Router} = require('express');
const restaurantRouter = Router();

const {getRestaurants} = require('../controllers/restaurantCtrl.js')

restaurantRouter.get('/restaurants', getRestaurants);



module.exports = restaurantRouter;
