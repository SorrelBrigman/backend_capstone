//file for scraping review data

const express = require('express');
const fs = require('fs');
const app     = express();
const request = require('request');
const list = require('./restaurantList.js');
const {getRestaurantInfo} = require('./restaurantScrape.js');
const {getReviewsOnPage} = require('./reviewScrape');
const {lineBreakRemover, parseCount, getRatingNumber, reviewPages, lastPageReviews } = require('./helper.js');
const restaurantJson = require('./restaurantsJson.js')
//j equals the index value of the restaurant array to start at
let j = 0;






let scrapeReviews = () => {
  let reviewInfo = []
  // console.log(list.length);
  for(var i =0; i < 15; i++) {
    console.log("i outside invet", i);
    setTimeout(() => {
      let restObj = restaurantJson[j]
      let yelp;
      if (j === 0) {
        yelp = `the-catbird-seat-nashville`
      } else if (j === 1 ) {
        yelp = `the-stillery-nashville`
      } else {
        let offset = j;
        yelp = restaurantJson[offset].yelp_id;
      }
      console.log("i inside", j)
      let url = `https://www.yelp.com/biz/${yelp}`
      let reviewExt = []
      reviewExt = reviewPages(restObj);
      console.log("in server3", reviewExt)
      let l = 0;
      for(var k = 0; k < reviewExt.length; k++) {
        setTimeout(() => {
          let reviewUrl = url + reviewExt[l]
          console.log("url", reviewUrl)
          request(reviewUrl, function( error, response, html) {
            if(!error) {
              let info = getReviewsOnPage(html, yelp)
              return info;
            }
          })
          l = l + 1;
        }, (k * 5000))
      }

      j = j + 1;

    }, (i * 180000))
  }
}







app.get('/scrape2', function(req, res){

    scrapeReviews();


});


app.listen('8080')

console.log('Serving on port 8080');

exports = module.exports = app;
