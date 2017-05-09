'use strict'

const {knex} = require('../../database');
const {getUniqueUsers, compareId} = require('../../../scraper/helper.js')
const reviews = require('../../../sortedUsers');

// console.log(reviews[1]);


let sortedUsers = getUniqueUsers(reviews);
// console.log("sortedUsers",sortedUsers)
let uniqueUsers = compareId(sortedUsers);
// console.log("uniqueUsers", uniqueUsers);
const reviewPromise = uniqueUsers.map(({yelp_id, user_name, user_location}) => {

    return knex.insert({yelp_id, user_name, user_location})

  // catch (e) {
  //   console.log("catch")
  //   console.log(e);
  // }
})

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(reviewPromise)
      .catch(e => {console.log(e)})
    });
};
