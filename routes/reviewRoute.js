'use strict'

const {Router} = require('express');
const reviewRouter = Router();

const {getRelavantReviews, getReviewsByUser} = require('../controllers/reviewCtrl');


reviewRouter.get('/reviews', getRelavantReviews);
reviewRouter.get('/reviews/user/:id', getReviewsByUser);


module.exports = reviewRouter;
