
'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./restaurantRoute'));
router.use(require('./userRoute'));
router.use(require('./reviewRoute'))


router.get('/', (res, req)=> {
  res.json({
    "title": "Similar Tastes Nashville API",
    "restaurants": "localhost:3000/api/v1/restaurants",
    "restaurants by id": "localhost:3000/api/v1/restaurants/:id"
    "users by restaurant rating": "localhost:3000/api/v1/users/restaurant",
    "reviews by specific restaurant rating": "localhost:3000/api/v1/reviews",
    "reviews by specific user": "localhost:3000/api/v1/reviews/user/:id",
    "reviews for specific restaurant based on rating of another restaurant": "localthost:3000/api/v1/reviews/filtered"
  })
})

module.exports = router;
