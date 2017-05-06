//function to remove line breaks from scraped data


const lineBreakRemover = (info) => {
  let infoArray = info.split('\n');
  let noLineInfo = infoArray[1];
  let noSpaceInfo = noLineInfo.trim();
  return noSpaceInfo;
}

//function to get the numberic value of the review votes

const parseCount = (votes) => {
  let numberOnly = (votes === "") ? 0 : parseInt(votes);
  return numberOnly;
}

//functino to get the numeric value from review

const getRatingNumber = (ratingString) => {
  let ratingArray = ratingString.split(' star rating');
  let ratingNumber = parseFloat(ratingArray[0]);
  return ratingNumber;
}

const reviewPages = (restaurantObj) => {
  let reviewCount = restaurantObj.numberOfReviews;
  //find the number of pages of reviews
  let pageNumber = (reviewCount/20);
  //find out the number of reviews on the last page
  let lastPage = (reviewCount%20);
  let reviewExtentions = [];
  for (let i = 0; i < pageNumber; i++) {
    let urlExtention;
    if(i = 0) {
      let urlExtention = "";
    } else {i < pageNumber} {
      let start = i * 20;
      let urlExtention = `?start${start}`
    }
    reviewExtentions.push(urlExtention);
  }
  return reviewExtentions;
}

const lastPageReviews = (restaurantObj) => {
  let reviewCount = restaurantObj.numberOfReviews;
  let lastPage = (reviewCount%20);
  return lastPage;
}

module.exports = {lineBreakRemover, parseCount, getRatingNumber, reviewPages, lastPageReviews }
