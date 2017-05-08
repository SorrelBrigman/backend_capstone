
exports.up = function(knex, Promise) {
  return knex.schema
  .createTableIfNotExists('reviews', function (table) {
    table.increments();
    table.string('restaurant_id').references('restaurants.yelp_id');
    table.string('user_id').references('users.yelp_id');
    table.integer('rating').notNullable();
    table.string('review_date');
    table.integer('voted_useful');
    table.integer('voted_funny');
    table.integer('voted_cool');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('reviews');
};
