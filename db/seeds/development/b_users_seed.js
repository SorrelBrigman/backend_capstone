'use strict'

const {knex} = require('../../database');
const {getUniqueUsers, compareId} = require('../../../scraper/helper.js')
const reviews = require('../../../sortedUsers');

// const reviews = require('./reviewsJson.json')
// console.log(reviews[1]);
console.log("number of reviews", reviews.length)

// let sortedUsers = getUniqueUsers(reviews);
// // console.log("sortedUsers",sortedUsers)
// let uniqueUsers = compareId(sortedUsers);
// console.log("uniqueUsers", uniqueUsers);
const reviewPromise = reviews.map(
  ({yelp_id,
    user_name,
    user_location}) => {
    // console.log("yelp_id", yelp_id);
    // console.log("user_name", user_name);
    // console.log("user_location", user_location)
    return knex('users').insert({id: yelp_id, user_name, user_location})

  // catch (e) {
  //   console.log("catch")
  //   console.log(e);
  // }
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return Promise.all(reviewPromise)
      .catch(e => {console.log("my error", e)})
    });
};
