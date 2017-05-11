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


// module.exports.getReviewsByRestaurant = ({query: {restaurantId}}, res, next) => {
//   Restaurant.query(`where`, )
//   .fetch({withRelated: ['reviews'], require: true})
//   .then((restReviews) => {
//     res.status(200).json(restReviews)
//   })
//   .catch((error) => {
//     next(error);
//   })
// }

//SQL query to get users by a certain restaurant and their rating
// select users.user_name, reviews.user_id, reviews.restaurant_id, reviews.rating from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating;

//get all users who reviewed a restaurant a certain way

// module.exports.getUsersByRestaurantRating = ({query: {restaurantId}, {rating}}, res, next) => {
//   Restaurant.forge({id: restaurantId})
// }
