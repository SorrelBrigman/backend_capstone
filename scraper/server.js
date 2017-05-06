const express = require('express');
const fs = require('fs');
const app     = express();
const request = require('request');
const list = require('./restaurantList.js');
const {getRestaurantInfo} = require('./restaurantScrape.js');
const {getReviewsOnPage} = require('./reviewScrape');
const {lineBreakRemover, parseCount, getRatingNumber, reviewPages, lastPageReviews } = require('./helper.js');


app.get('/scrape2', function(req, res){

  return Promise.all(list.map((i) => {


    let RestInfo = [];



    let url = `https://www.yelp.com/biz/${list[i]}`;

     return request(url, function(error, response, html){
       let getRestPromise = new Promise ((resolve, reject) => {
      // if(!error){
       let info = getRestaurantInfo(html)
       return info;
       })
      // .then((info) => {
      // RestInfo.push(info);

      // })
      // .catch((error) => {
      // console.log(error)
      // })

    // if(i === 0 ) {
    //     fs.writeFileSync('outputRestaurants.json', JSON.stringify(RestInfo, null, 4), function(err){

    //         console.log('File successfully written! - Check your project directory for the output.json file');

    //     })
    // } else {
    //   fs.appendFileSync('outputRestaurants.json', JSON.stringify(RestInfo, null, 4), function(err){

    //         console.log('File successfully updated! - Check your project directory for the output.json file');

    //     })
    // }







      // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
      res.send('Check your console!')
      // }//end of if
    })// end of request
  }))

}); //end of get


app.listen('8080')

console.log('Serving on port 8080');

exports = module.exports = app;
