'use strict'

const { bookshelf } = require('../db/database');
const Restaurant = require('../models/restaurantModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel')


module.exports.getUsersByRestaurantRating = ({query: {restaurantId}}, res, next) => {
   //Restaurant.query({where: {id : restaurantId} and {rating: rating}})
   // Restaurant.where({id : query.restaurantId})
   console.log('query', restaurantId)
  Restaurant.forge({id : 'the-catbird-seat-nashville'})
  .fetch({withRelated: ['users'], require: true})
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((error) => {
    next(error);
  })
}
