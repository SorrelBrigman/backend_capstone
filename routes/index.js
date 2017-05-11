
'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./restaurantRoute'));
router.use(require('./userRoute'));
router.use(require('./reviewRoute'))


router.get('/', (res, req)=> {
  res.json({
    "title": "Similar Tastes Nashville API",
    "restaurants": "localhost:3000:/api/v1/restaurants",
    "users": "localhost:3000:/api/v1/users",
    "reviews": "localhost:3000:/api/v1/reviews"
  })
})

module.exports = router;
