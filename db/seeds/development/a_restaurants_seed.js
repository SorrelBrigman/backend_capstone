'use strict'

const {knex} = require('../../database');

const restaurants = require('./restaurantsJson');

// console.log(restaurants[1]);

const restaurantPromise = restaurants.map(
  ({yelp_id,
    name,
    price_range,
    category_str_list,
    address_string,
    address_city,
    address_state,
    address_zip,
    neighborhood_str_list,
    website,
    phone,
    monday_hours,
    tuesday_hours,
    wednesday_hours,
    thursday_hours,
    friday_hours,
    saturday_hours,
    sunday_hours,
    numberOfReviews}) => {
    return knex('restaurants').insert({
      yelp_id,
      name,
      price_range,
      category_str_list,
      address_string,
      address_city,
      address_state,
      address_zip,
      neighborhood_str_list,
      website,
      phone,
      monday_hours,
      tuesday_hours,
      wednesday_hours,
      thursday_hours,
      friday_hours,
      saturday_hours,
      sunday_hours,
      numberOfReviews});
});


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(restaurantPromise)
    });
};
