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
          let info = getRestaurantInfo(html)
          return info;
          console.log(info)
        //   restInfo.push(info)
        //   console.log("restInfo", restInfo)
        //   if (j === list.length) {
        //     fs.writeFileSync('outputRestaurants.json', JSON.stringify(restInfo, null, 4), function(err){
        //       res.send('Check your console!')
        //      })
        //   }
        // } else {
        //   console.log(error)
        }
      })
      j = j + 1;
    }, (i * 2000))
  }
}




    // let scrapeSites = () => {
    //     return Promise.all(
    //       list.map((urls) => {
    //       let url = `https://www.yelp.com/biz/${urls}`
    //       console.log(url)
    //       return rp(url, function(error, response, html){
    //         if(!error){
    //           console.log(html)
    //           let info = getRestaurantInfo(html)
    //           // console.log(info);
    //           return info;
    //           }
    //          })
    //       // .then((info) => {
    //       //   fs.appendFileSync('outputRestaurants.json', JSON.stringify(jsonRest, null, 4), function(err){
    //       //   })
    //       // })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //     }))
    //   }

    // scrapeUrl(url) {
    //     return request({
    //         url: `https://www.yelp.com/biz/${url}`
    //     })
    //     .then(html => {
    //         // const data = {};
    //         let data = getRestaurantInfo(html);
    //         // // use cheerio to parse html here
    //         // data.title = $('title').text();

    //         return data;
    //     });
    // }





app.get('/scrape2', function(req, res){

    scrapeRestaurants();


});


app.listen('8080')

console.log('Serving on port 8080');

exports = module.exports = app;
