const { bookshelf } = require('../db/database');
require('./reviewModel');



//SQL query to get users by a certain restaurant and their rating
// select users.user_name, reviews.user_id, reviews.restaurant_id, reviews.rating from users
// join reviews on users.id = reviews.user_id
// where reviews.restaurant_id = 'the-catbird-seat-nashville' and reviews.rating <= 2
// order by reviews.rating;




const User = bookshelf.Model.extend({
  tableName: 'users',
  reviews : function () {return this.hasMany('Review')};
}, {
  getAll: function () {
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((error) => {
      return error;
    })
  }

});

module.exports = ("User", User);
