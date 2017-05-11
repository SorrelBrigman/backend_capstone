const { bookshelf, knex } = require('../db/database');
require('./reviewModel');
require('./restaurantModel');


const User = bookshelf.Model.extend({
  tableName: 'users',
  reviews : function () {return this.hasMany('Review')},
  restaurants : function () {return this.belongsToMany('User').through('Review')}
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
  },
  getUsersByRestaurantRatingKnex : function (restaurant_id, rating) {
    return knex.raw(`select * from users
    join reviews on users.id = reviews.user_id
    where reviews.restaurant_id = '${restaurant_id}' and reviews.rating ${rating}
    order by reviews.rating;`)
  }

});

module.exports = bookshelf.model("User", User);
