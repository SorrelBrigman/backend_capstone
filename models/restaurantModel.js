'use strict'

const { bookshelf } = require('../db/database');


const Restaurant = bookshelf.Model.extend({
  tableName: 'restaurants'
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
  }
})



module.exports = ('Restaurant', Restaurant);
