'use strict'

const {Router} = require('express');
const restaurantRouter = Router();

const {getRestaurants, getSingleRestaurant, getReviewsByRestaurant} = require('../controllers/restaurantCtrl.js')

restaurantRouter.get('/restaurants', getRestaurants);
restaurantRouter.get('/restaurants/reviews', getReviewsByRestaurant);
restaurantRouter.get('/restaurants/:id', getSingleRestaurant)


module.exports = restaurantRouter;
