'use strict'

const { bookshelf, knex } = require('../db/database');
const Restaurant = require('../models/restaurantModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel')


//SQL query to get users by a certain restaurant and their rating
// select users.user_name, reviews.user_id, reviews.restaurant_id, reviews.rating from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating;

//get all users who reviewed a restaurant a certain way



const getUsersByRestaurantRatingKnex = (restaurant_id, rating) => {
  return knex.raw(`select * from users
join reviews on users.id = reviews.user_id
where reviews.restaurant_id = '${restaurant_id}' and reviews.rating ${rating}
order by reviews.rating;`)
}

module.exports.getUsersByRestaurantRating = ({query}, res, next) => {
  let restaurant_id = query.restaurant_id;
  let rating = query.rating;
  getUsersByRestaurantRatingKnex(restaurant_id, rating)
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((error) => {
    next(error);
  })
}
