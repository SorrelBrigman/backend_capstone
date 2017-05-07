const express = require('express');
const fs = require('fs');
const app     = express();
const request = require('request');
const list = require('./restaurantList.js');
const {getRestaurantInfo} = require('./restaurantScrape.js');
const {getReviewsOnPage} = require('./reviewScrape');
const {lineBreakRemover, parseCount, getRatingNumber, reviewPages, lastPageReviews } = require('./helper.js');
const rp = require('request-promise-native');


let j = 0;

let scrapeRestaurants = () => {
  let restInfo = []
  console.log(list.length);
  for(var i =0; i < list.length; i++) {
    console.log("i outside invet", i)
    setTimeout(() => {

      console.log("i inside", j)
      let url = `https://www.yelp.com/biz/${list[j]}`
      request(url, function(error, response, html) {
        if(!error) {
          let yelp = list[j]
          let info = getRestaurantInfo(html, yelp)
          return info;
        }
      })
      j = j + 1;
    }, (i * 2000))
  }
}




app.get('/scrape2', function(req, res){

    scrapeRestaurants();


});


app.listen('8080')

console.log('Serving on port 8080');

exports = module.exports = app;
