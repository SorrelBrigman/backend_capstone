const request = require('request');
const {lineBreakRemover, parseCount, getRatingNumber } = require('./helper.js')
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');


//function takes two arguments, the page it is scraping,
//and the current yelp id of the restaurant

const getReviewsOnPage = (html, yelpRestId) => {




        var $ = cheerio.load(html);

        var yelp_id,
            user_name,
            user_location,
            rating,
            review_date,
            comments,
            votes_useful,
            votes_funny,
            votes_cool;


        var jsonReviews = [];

       $('.reviews').filter(function () {
          var data = $(this);
          data.children().each(function(j) {
            let reviewData = $(this);
            let review = {}
            //first review slot on page is empty, so skip it
            if (j >= 1) {
              review.restaurant_id = yelpRestId;
              let yelp_id_href = reviewData.find('.user-display-name').attr('href');
              let yelp_id_array = yelp_id_href.split('userid=')
              review.user_name = reviewData.find('.user-display-name').text();
              review.yelp_id = yelp_id_array[1];
              let location = reviewData.find('.user-location').text();
              review.user_location = lineBreakRemover(location);
              rawRating = reviewData.find('.i-stars').attr('title');
              review.rating = getRatingNumber(rawRating);
              let reviewDate = reviewData.find('.rating-qualifier').text();
              review.review_date = lineBreakRemover(reviewDate);
              review.comments =  reviewData.find('p').text()
              let useful = reviewData.find('.useful').children().next().next().text();
              review.votes_useful  = parseCount(useful);
              let funny = reviewData.find('.funny').children().next().next().text();
              review.votes_funny = parseCount(funny);
              let cool = reviewData.find('.cool').children().next().next().text();
              review.votes_cool = parseCount(cool);
              //push each review to the array of reviews for this page
              jsonReviews.push(review);
             // console.log("jsonReviews", jsonReviews);
                fs.appendFileSync('outputreview05.json', JSON.stringify(review, null, 4), function(err){
                  res.send('Check your console!')
               })
                fs.appendFileSync('outputreview05.json', `,`, function(err){
                  res.send('Check your console!')
               })
            }

          })

          return jsonReviews
       })



} //end of function


module.exports = {getReviewsOnPage}
