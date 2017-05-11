'use strict'

const { bookshelf } = require('../db/database');
require('./restaurantModel');
require('./userModel')

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
  restaurants: function () {return this.belongsTo('Restaurant')},
  users: function () {return this.belongsTo('User')}
}, {
  getAll: function (){
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((error) => {
      return error;
    })
  }
})


module.exports = ('Review', Review);
