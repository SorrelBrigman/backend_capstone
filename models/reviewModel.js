'use strict'

const { bookshelf, knex } = require('../db/database');
require('./restaurantModel');
require('./userModel')

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
  restaurants: function () {return this.belongsTo('Restaurant')},
  users: function () {return this.belongsTo('User')}
}, {
  getAll: function (){
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((error) => {
      return error;
    })
  },
    getRelavantReviewsKnex : function (restaurantName, rating) { return knex.raw(`select reviews.id, reviews.restaurant_id, reviews.user_id, reviews.rating, reviews.review_date, reviews.votes_useful, reviews.votes_funny, reviews.votes_cool, restaurants.name from reviews
      join users on users.id = reviews.user_id
      join restaurants on reviews.restaurant_id = restaurants.id
      where reviews.user_id in (select users.id from users
      join reviews on users.id = reviews.user_id where reviews.restaurant_id = '${restaurantName}' and reviews.rating ${rating}
       order by reviews.rating) and reviews.rating >= 4`)

  },
  getReviewsByUserKnex : function (userId) {
    return knex.raw(`select * from reviews join users on users.id = reviews.user_id where users.id = '${userId}'`)
  },
  getFilteredReviewsKnex : function (restaurantName, rating, otherRestaurantName) {
    return knex.raw(`select reviews.id, reviews.restaurant_id, reviews.user_id, reviews.rating, reviews.review_date, reviews.votes_useful, reviews.votes_funny, reviews.votes_cool, restaurants.name from reviews
    join users on users.id = reviews.user_id
    join restaurants on reviews.restaurant_id = restaurants.id
    where reviews.user_id in (select users.id from users
    join reviews on users.id = reviews.user_id
    where reviews.restaurant_id = '${restaurantName}' and reviews.rating ${rating}
    order by reviews.rating) and reviews.restaurant_id ='${otherRestaurantName}';
    `)
  }

})


module.exports = bookshelf.model('Review', Review);
