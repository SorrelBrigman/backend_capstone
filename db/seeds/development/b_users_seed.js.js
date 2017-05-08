'use strict'

const {knex} = require('../../database');

const reviews = require('./reviewsJson');

console.log(reviews[1]);

const reviewPromise = reviews.map(({yelp_id, user_name, user_location}) => {
  return knex.raw(`INSERT INTO users (yelp_id, user_name, user_location) SELECT '${yelp_id}', '${user_name}', '${user_location}' WHERE NOT EXISTS (SELECT yelp_id FROM users WHERE yelp_id = '${yelp_id}')`);
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(reviewPromise)
    });
};
