
exports.up = function(knex, Promise) {
  return knex.schema
  .createTableIfNotExists('reviews', function (table) {
    table.increments();
    table.string('restaurant_id').references('restaurants.id');
    table.string('user_id').references('users.id');
    table.integer('rating');
    table.string('review_date');
    table.integer('votes_useful');
    table.integer('votes_funny');
    table.integer('votes_cool');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('reviews');
};
