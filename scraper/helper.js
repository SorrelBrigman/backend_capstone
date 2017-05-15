//function to remove line breaks from scraped data


const lineBreakRemover = (info) => {
  let infoArray = info.split('\n');
  let noLineInfo = infoArray[1];
  if (noLineInfo) {
    let noSpaceInfo = noLineInfo.trim();
    return noSpaceInfo;
  } else {
    return infoArray[0].trim
  }
}

//function to get the numberic value of the review votes

const parseCount = (votes) => {
  let numberOnly = (votes === "") ? 0 : parseInt(votes);
  return numberOnly;
}

//functino to get the numeric value from review

const getRatingNumber = (ratingString) => {
  if(ratingString !== undefined || null) {
  let ratingArray = ratingString.split(' star rating');
  let ratingNumber = parseFloat(ratingArray[0]);
  return ratingNumber;
  } else {
    return ratingString
  }

}

const reviewPages = (restaurantObj) => {
  console.log(restaurantObj)
  let reviewCount = restaurantObj.numberOfReviews;
  //find the number of pages of reviews
  let pageNumber = (reviewCount / 20);
  //find out the number of reviews on the last page
  let lastPage = (reviewCount%20);
  // if(pageNumber === 0) {
  //   pageNumber = pageNumber + 1;
  // }
  let reviewExtentions = [];
  let restart = 0;
  for (let i = restart; i < pageNumber; i++) {
    console.log("i", i)
    console.log("pageNUmber", pageNumber)
    let urlExtention;
    if(i === 0) {
      urlExtention = "";
    } else if (i < pageNumber) {
      let start = i * 20;
      urlExtention = `?start=${start}`;
      // console.log(urlExtention)
    } else {
      if (i === parseInt(reviewCount/20)) {
        return
      }
    }
      console.log("urlExtention", urlExtention)
    reviewExtentions.push(urlExtention);
    // console.log(reviewExtentions);
  }
  console.log("array of extentions", reviewExtentions)
  return reviewExtentions;
}

const lastPageReviews = (restaurantObj) => {
  let reviewCount = restaurantObj.numberOfReviews;
  let lastPage = (reviewCount%20);
  return lastPage;
}


const compareId = (sortedArray) => {
  let uniqueUsers = []
  uniqueUsers.push(sortedArray[0]);
  for(let i = 1; i < sortedArray.length; i++) {
    if(sortedArray[i].yelp_id === sortedArray[i-1].yelp_id) {

    } else {
      uniqueUsers.push(sortedArray[i])
    }
  }
  console.log(uniqueUsers)
  return uniqueUsers
}


const getUniqueUsers = (reviewArray) => {
  reviewArray.sort((a,b) => {
    if(a.yelp_id < b.yelp_id)
      return -1;
    if (a.yelp_id > b.yelp_id)
      return 1;
    return 0;
  })
  return reviewArray;
  // let filteredUsers = compareId(reviewArray);
  // return filteredUsers;
}

module.exports = {lineBreakRemover, parseCount, getRatingNumber, reviewPages, lastPageReviews, getUniqueUsers, compareId }
