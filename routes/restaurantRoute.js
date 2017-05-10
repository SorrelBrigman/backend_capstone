'use strict'

const {Router} = require('express');
const restaurantRouter = Router();

const {getRestaurants, getSingleRestaurant} = require('../controllers/restaurantCtrl.js')

restaurantRouter.get('/restaurants', getRestaurants);
restaurantRouter.get('/restaurants/:id', getSingleRestaurant)


module.exports = restaurantRouter;
