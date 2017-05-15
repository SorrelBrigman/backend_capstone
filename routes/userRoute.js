'use strict'

const {Router} = require('express');
const userRouter = Router();

const {getUsersByRestaurantRating} = require('../controllers/userCtrl')


userRouter.get('/users/restaurant', getUsersByRestaurantRating);


module.exports = userRouter;
