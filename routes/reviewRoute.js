'use strict'

const {Router} = require('express');
const reviewRouter = Router();

const {getRelavantReviews} = require('../controllers/reviewCtrl');


reviewRouter.get('/reviews', getRelavantReviews);


module.exports = reviewRouter;
