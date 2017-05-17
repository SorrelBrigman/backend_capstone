'use strict'

const {knex} = require('../../database');

const reviewsAll = require('../../data/reviews.json');

const reviews = reviewsAll.slice(45000, 60000);

console.log("number of reviews", reviews.length)

// let sortedUsers = getUniqueUsers(reviews);
// // console.log("sortedUsers",sortedUsers)
// let uniqueUsers = compareId(sortedUsers);
// console.log("uniqueUsers", uniqueUsers);
const reviewPromise = reviews.map(
  ({restaurant_id,
    yelp_id,
    rating,
    review_date,
    votes_useful,
    votes_funny,
    votes_cool}) => {
    // console.log("yelp_id", yelp_id);
    // console.log("user_name", user_name);
    // console.log("user_location", user_location)
    return knex('reviews').insert({
      user_id: yelp_id,
      restaurant_id,
      rating,
      review_date,
      votes_useful,
      votes_funny,
      votes_cool
    })

  // catch (e) {
  //   console.log("catch")
  //   console.log(e);
  // }
})

exports.seed = function(knex, Promise) {

      return Promise.all(reviewPromise)
      .catch(e => {console.log("my error", e)})
    ;
};
