
exports.up = function(knex, Promise) {
  return knex.schema
  .createTableIfNotExists('users', function(table) {
    table.string('yelp_id').unique().notNullable().primary();
    table.string('user_name');
    table.string('user_location');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('users');
};
