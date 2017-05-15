'use strict'

const { bookshelf } = require('../db/database');
require('./reviewModel');
require('./userModel')

const Restaurant = bookshelf.Model.extend({
  tableName: 'restaurants',
   reviews : function () {return this.hasMany('Review')},
   users : function () {return this.belongsToMany('User').through('Review')}
}, {
  getAll : function() {
    console.log("getting all restaurants from Model");
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows;
    })
    .catch((error) => {
      return error;
    })
  },
  getOneRestaurant : function(id) {
    return this.forge({id})
    .fetch()
    .then((row) => {
      return row
    })
    .catch((error) => {
      return error;
    })
  }
})



module.exports = bookshelf.model('Restaurant', Restaurant);
