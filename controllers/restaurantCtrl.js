'use strict';

const { bookshelf } = require('../db/database');
const Restaurant = require('../models/restaurantModel');


module.exports.getRestaurants = (req, res, next) => {
  Restaurant.getAll()
  .then((restaurants) => {
    res.status(200).json(restaurants);
  })
  .catch( (error) => {
    next(error)
  })
}
