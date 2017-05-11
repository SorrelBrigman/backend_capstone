'use strict';

const { bookshelf } = require('../db/database');
const Restaurant = require('../models/restaurantModel');


module.exports.getRestaurants = (req, res, next) => {
  Restaurant.getAll()
  .then((restaurants) => {
    res.status(200).json(restaurants);
  })
  .catch( (error) => {
    next(error);
  })
}

module.exports.getSingleRestaurant = ({params: {id}}, res, next) => {
  console.log("restaurant id", id);
  Restaurant.getOneRestaurant(id)
  .then((restaurant) => {
    res.status(200).json(restaurant);
  })
  .catch((error) => {
    next(error);
  })
}


module.exports.getReviewsByRestaurant = ({query: {restaurantId}}, res, next) => {
  Restaurant.forge({id: restaurantId})
  .fetch({withRelated: ['reviews'], require: true})
  .then((restReviews) => {
    res.status(200).json(restReviews)
  })
  .catch((error) => {
    next(error);
  })
}
