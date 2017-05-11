'use strict';

const { bookshelf, knex } = require('../db/database');
const Restaurant = require('../models/restaurantModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel')

// get all reviews of a certain user
// select * from reviews
// join users on users.id = reviews.user_id
// where users.id = '--8RqkRwr71-t2GNW87GrQ';



const getUsers = (restaurantName, rating) => { return knex.raw(`select * from reviews
join users on users.id = reviews.user_id
 where reviews.user_id in (select users.id from users
 join reviews on users.id = reviews.user_id where reviews.restaurant_id = '${restaurantName}' and reviews.rating ${rating}
 order by reviews.rating)`)
}

// const getUsers = () => knex('users').then((rows) => rows)



module.exports.getRelavantReviews = ({query}, res, next) => {
  let restaurantName = 'the-catbird-seat-nashville';
  let rating = '<= 2'
  console.log("trying")
  getUsers(restaurantName, rating)
  .then((rows) => {
    res.status(200).json(rows)
  })
  // .then((bob) => {
  //   res.status(200).json(bob);
  // })
  // .catch(error) => {
  //   next(error)
  // };
}


// module.exports.getRelavantReviews = ({query}, res, next) => {
//   return knex.select().from('reviews').leftJoin('users',
//     'reviews.user_id', '=', 'reviews.user_id').where('reviews.restaurant_id', function(){
//       this.select(users.id).from('users').innerJoin('reviews', 'users.id', '=', 'reviews.user_id')
//       .where('reviews.restaurant_id', '=', 'the-catbird-seat-nashville')
//     })
//   }





//SQL query to get all reviews from users who rating a restaurant a certain way:
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating);



//SQL query to get reviews for a certain restaurant based on rating of another restaurant
// select * from reviews
// join users on users.id = reviews.user_id
// where reviews.user_id in (select users.id from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating >= 4
// order by reviews.rating) and reviews.restaurant_id ='husk-nashville';
