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

module.exports = {lineBreakRemover, parseCount, getRatingNumber }
