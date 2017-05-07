const request = require('request');
const {lineBreakRemover } = require('./helper.js')
const cheerio = require('cheerio');
const fs = require('fs');



const getRestaurantInfo = (html, yelp) => {

  // let url = urlSent;
  // console.log(url);
  // request(url, function(error, response, html){

      console.log("got here")
          // First we'll check to make sure no errors occurred when making the request

          // if(!error){
              // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

              var $ = cheerio.load(html);

              // Finally, we'll define the variables we're going to capture

              var name,
              category_str_list,
              yelp_id,
              price_range,
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
              sunday_hours;

              var jsonRest = {
                name : "",
                category_str_list: "",
                price_range : "",
                address_string: "",
                address_city: "Nashville",
                address_state: "TN",
                address_zip: "",
                neighborhood_str_list: "",
                website: "",
                phone: "",
                monday_hours: "",
                tuesday_hours: "",
                wednesday_hours: "",
                thursday_hours: "",
                friday_hours: "",
                saturday_hours: "",
                sunday_hours: "",
                yelp_id: yelp};


                //get restaurant name
              $('.biz-page-title').filter(function() {
                  var data = $(this);
                  name = data.text();
                  jsonRest.name = lineBreakRemover(name);
              });
              //get restaurant category
              $('.category-str-list').filter(function() {
                  var data = $(this);
                  category_str_list = data.text();
                  jsonRest.category_str_list = lineBreakRemover(category_str_list);

              });
              //get rest. price range
              $('.price-range').filter(function() {
                  var data = $(this);
                  price_range = data.text();
                  jsonRest.price_range = price_range;
              });
              //get rest. address string
              $('address').filter(function() {
                var data = $(this);
                address_string = data.text();
                address_array = address_string.split('Nashville, TN ')
                console.log("address_array", address_array)
                jsonRest.address_string = lineBreakRemover(address_array[0]);
                if (address_array[1]) {
                  var zip = address_array[1].split("\n");
                  jsonRest.address_zip = zip[0].trim();
                }
              });

              //get restaurant neighborhood
              $('.neighborhood-str-list').filter(function() {
                  var data = $(this);
                  neighborhood_str_list = data.text();
                  jsonRest.neighborhood_str_list = lineBreakRemover(neighborhood_str_list);
              });
              //get website
              $('.biz-website').filter(function() {
                  var data = $(this);
                  website = data.children().last().text();
                  jsonRest.website = website;
              });
              //get phone
              $('.biz-phone').filter(function() {
                  var data = $(this);
                  phone = data.text();
                  jsonRest.phone = lineBreakRemover(phone);
              });
              //get business hours
              $('.hours-table').filter(function() {
                var data = $(this);
                monday_hours = data.children().children().first().children().first().next().text();
                jsonRest.monday_hours = lineBreakRemover(monday_hours)
                tuesday_hours = data.children().children().first().next().children().first().next().text();
                jsonRest.tuesday_hours = lineBreakRemover(tuesday_hours);
                wednesday_hours = data.children().children().first().next().next().children().first().next().text();
                jsonRest.wednesday_hours = lineBreakRemover(wednesday_hours);
                thursday_hours = data.children().children().first().next().next().next().children().first().next().text();
                jsonRest.thursday_hours = lineBreakRemover(thursday_hours);
                friday_hours = data.children().children().last().prev().prev().children().first().next().text();
                jsonRest.friday_hours = lineBreakRemover(friday_hours);
                saturday_hours = data.children().children().last().prev().children().first().next().text();
                jsonRest.saturday_hours = lineBreakRemover(saturday_hours);
                sunday_hours = data.children().children().last().children().first().next().text();
                jsonRest.sunday_hours = lineBreakRemover(saturday_hours);
              });
              //get number of reviews for this rest.
              $('.review-count').filter(function() {
                var data = $(this);
                var numberOfReviews = data.text();
                var reviewNumber = lineBreakRemover(numberOfReviews);
                jsonRest.numberOfReviews = parseInt(reviewNumber);
              })
        // fs.appendFileSync('outputRestaurants.json', JSON.stringify(jsonRest, null, 4), function(err){

        //     console.log('File successfully updated! - Check your project directory for the output.json file');

        // })

              console.log("jsonRest", jsonRest);
              fs.appendFileSync('outputRestaurants.json', JSON.stringify(jsonRest, null, 4), function(err){
                res.send('Check your console!')
             })
              fs.appendFileSync('outputRestaurants.json', `,`, function(err){
                res.send('Check your console!')
             })
              return jsonRest;

     // } //end of if
    // }); //end of request



} //end of get restaurant


module.exports = {getRestaurantInfo}
