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
let l = 0;



let restObj = {
    "name": "The Stillery",
    "category_str_list": "American (New),",
    "price_range": "$$",
    "address_string": "113 2nd Ave N",
    "address_city": "Nashville",
    "address_state": "TN",
    "address_zip": "37201",
    "neighborhood_str_list": "Downtown",
    "website": "stillerynashville.com",
    "phone": "(615) 942-8080",
    "monday_hours": "11:00 am - 9:00 pm",
    "tuesday_hours": "11:00 am - 10:00 pm",
    "wednesday_hours": "11:00 am - 10:00 pm",
    "thursday_hours": "11:00 am - 1:00 am",
    "friday_hours": "11:00 am - 1:00 am",
    "saturday_hours": "11:00 am - 1:00 am",
    "sunday_hours": "11:00 am - 1:00 am",
    "numberOfReviews": 60,
    "yelp_id": "the-stillery-nashville"
}


let scrapeReviews = () => {
  let reviewInfo = []
  // console.log(list.length);
  for(var i =0; i < 1; i++) {
    console.log("i outside invet", i)
    setTimeout(() => {

      console.log("i inside", j)
      let url = `https://www.yelp.com/biz/${restObj.yelp_id}`
      let reviewExt = reviewPages(restObj)
      // console.log(reviewExt)
      for(var k = 0; k < reviewExt.length; k ++) {
        setTimeout(() => {
          let reviewUrl = url + reviewExt[l]
          console.log("url", reviewUrl)
          request(reviewUrl, function( error, response, html) {
            if(!error) {
              let info = getReviewsOnPage(html, restObj.yelp_id)
              return info;
            }
          })
          l = l + 1;
        }, (k * 5000))
      }

      j = j + 1;

    }, (i * 90000))
  }
}







app.get('/scrape2', function(req, res){

    scrapeReviews();


});


app.listen('8080')

console.log('Serving on port 8080');

exports = module.exports = app;
