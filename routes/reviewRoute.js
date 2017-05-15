'use strict'

const {Router} = require('express');
const reviewRouter = Router();

const {getRelavantReviews, getReviewsByUser, getOtherRestaurantReviews} = require('../controllers/reviewCtrl');


reviewRouter.get('/reviews', getRelavantReviews);
reviewRouter.get('/reviews/filtered', getOtherRestaurantReviews)
reviewRouter.get('/reviews/user/:id', getReviewsByUser);


module.exports = reviewRouter;
