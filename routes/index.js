
'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./restaurantRoute'));
router.use(require('./userRoute'));
router.use(require('./reviewRoute'))


router.get('/', (req, res)=> {
  res.json({
    "title": "Similar Tastes Nashville API",
    "restaurants": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/restaurants",
    "restaurants by id": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/restaurants/:id",
    "users by restaurant rating": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/users/restaurant?restaurant_id=<id>&&rating=<rating>",
    "reviews by specific restaurant rating": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/reviews?restaurant_id=<id>&&rating=<rating>",
    "reviews by specific user": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/user/:id",
    "reviews for specific restaurant based on rating of another restaurant": "https://similar-tastes-nashville-api.herokuapp.com/api/v1/reviews/filtered?restaurant_id=<id>&&rating=<rating>&&restaurant_to_compare=<id>"
  })
})

module.exports = router;
