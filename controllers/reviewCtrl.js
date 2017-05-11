'use strict';

const { bookshelf, knex } = require('../db/database');
const Restaurant = require('../models/restaurantModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel')

// get all reviews of a certain user
// select * from reviews
// join users on users.id = reviews.user_id
// where users.id = '--8RqkRwr71-t2GNW87GrQ';


const getReviewsByUserKnex = (userId) => knex.raw(`select * from reviews join users on users.id = reviews.user_id where users.id = '${userId}'`)

module.exports.getReviewsByUser = ({params: {id}}, res, next) => {
  let userId = id;
  getReviewsByUserKnex(id)
  .then((rows) => {
    res.status(200).json(rows)
  })
  .catch((error) => {
    next(error)
  })
}


//SQL query to get all reviews from users who rating a restaurant a certain way:
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating);

const getRelavantReviewsKnex = (restaurantName, rating) => { return knex.raw(`select * from reviews
join users on users.id = reviews.user_id
 where reviews.user_id in (select users.id from users
 join reviews on users.id = reviews.user_id where reviews.restaurant_id = '${restaurantName}' and reviews.rating ${rating}
 order by reviews.rating)`)
}


module.exports.getRelavantReviews = ({query}, res, next) => {
  console.log('query.Name', query.restaurant_id);
  console.log('query.rating', query.rating);
  let restaurantName = query.restaurant_id;
  let rating = query.rating;
  console.log("trying");
  getRelavantReviewsKnex(restaurantName, rating)
  .then((rows) => {
    res.status(200).json(rows)
  })
  .catch((error) => {
    next(error)
  });
}



//SQL query to get reviews for a certain restaurant based on rating of another restaurant
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating >= 4
// order by reviews.rating) and reviews.restaurant_id ='husk-nashville';


const getFilteredReviewsKnex = (restaurantName, rating, otherRestaurantName) => {
  return knex.raw(`select * from reviews
join users on users.id = reviews.user_id
where reviews.user_id in (select users.id from users
join reviews on users.id = reviews.user_id
where reviews.restaurant_id = '${restaurantName}' and reviews.rating ${rating}
order by reviews.rating) and reviews.restaurant_id ='${otherRestaurantName}';
`)
}



module.exports.getOtherRestaurantReviews = ({ query }, res, next) => {
  let restaurantName = query.restaurant_id;
  let rating = query.rating;
  let otherRestaurantName = query.restaurant_to_compare
  getFilteredReviewsKnex(restaurantName, rating, otherRestaurantName)
  .then((rows) => {
    res.status(200).json(rows)
  })
  .catch((error) => {
    next(error)
  })
}
