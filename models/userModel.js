const { bookshelf } = require('../db/database');
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
  }

});

module.exports = bookshelf.model("User", User);
