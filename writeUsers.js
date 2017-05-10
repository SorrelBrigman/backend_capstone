const fs = require('fs');
const reviews = require('./db/data/reviews.json');
//const {getUniqueUsers, compareId} = require('./scraper/helper.js')



const compareId = (sortedArray) => {
  console.log("I've been called")
  console.log("sortedArray length", sortedArray.length)
  let uniqueUsers = []
  uniqueUsers.push(sortedArray[0]);

  for(let i = 0; i < sortedArray.length; i++) {
    console.log("in for loop")
    if(i === 0) {
      let { yelp_id, user_name, user_location} = sortedArray[i]
  // return uniqueUsers
      fs.appendFileSync('sortedUsers.json', JSON.stringify({yelp_id, user_name, user_location}, null, 4), function(err){
                    res.send('Check your console!')
                 })
        fs.appendFileSync('sortedUsers.json', `,`, function(err){
                  res.send('Check your console!')

               })
    } else {
    if(sortedArray[i].yelp_id === sortedArray[i-1].yelp_id) {

    } else {
      let { yelp_id, user_name, user_location} = sortedArray[i]
  // return uniqueUsers
      fs.appendFileSync('sortedUsers.json', JSON.stringify({yelp_id, user_name, user_location}, null, 4), function(err){
                    res.send('Check your console!')
                 })
        fs.appendFileSync('sortedUsers.json', `,`, function(err){
                  res.send('Check your console!')
               })
      // uniqueUsers.push(sortedArray[i])
      }
    }
  }

  console.log(uniqueUsers)
}


const getUniqueUsers = (reviewArray) => {
  reviewArray.sort((a,b) => {
    if(a.yelp_id < b.yelp_id)
      return -1;
    if (a.yelp_id > b.yelp_id)
      return 1;
    return 0;
  })
  // return reviewArray;
  // let filteredUsers =
  compareId(reviewArray);
  // return filteredUsers;
}





const myUsers = (reviewArray) => {

  getUniqueUsers(reviewArray);


}


myUsers(reviews);
