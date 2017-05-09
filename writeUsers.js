const fs = require('fs');
const reviews = require('./db/seeds/development/reviewsJson');
//const {getUniqueUsers, compareId} = require('./scraper/helper.js')



const compareId = (sortedArray) => {
  console.log("I've been called")
  console.log("sortedArray length", sortedArray.length)
  let uniqueUsers = []
  uniqueUsers.push(sortedArray[0]);
  for(let i = 1; i < sortedArray.length; i++) {
    console.log("in for loop")
    if(sortedArray[i].yelp_id === sortedArray[i-1].yelp_id) {

    } else {

  // return uniqueUsers
      fs.appendFileSync('sortedUsers.json', JSON.stringify(sortedArray[i], null, 4), function(err){
                    res.send('Check your console!')
                 })
        fs.appendFileSync('sortedUsers.json', `,`, function(err){
                  res.send('Check your console!')
               })
      // uniqueUsers.push(sortedArray[i])
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
