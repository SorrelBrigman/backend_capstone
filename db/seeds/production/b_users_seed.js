'use strict'

const {knex} = require('../../database');
const {getUniqueUsers, compareId} = require('../../../scraper/helper.js')
const users = require('../../data/users.json');


console.log("number of users", users.length)


const reviewPromise = users.map(
  ({yelp_id,
    user_name,
    user_location}) => {

    return knex('users').insert({id: yelp_id, user_name, user_location})

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
