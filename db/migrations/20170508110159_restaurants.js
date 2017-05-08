
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('restaurants', function (table) {
    table.string('yelp_id').notNullable().unique().primary();
    table.string('price_range');
    table.specificType('category_str_list', knex.raw('text[]'));
    table.string('address_string');
    table.string('address_city');
    table.string('address_state');
    table.string('address_zip');
    table.specificType('neighborhood_str_list', knex.raw('text[]'));
    table.string('website');
    table.string('phone');
    table.string('monday_hours');
    table.string('tuesday_hours');
    table.string('wednesday_hours');
    table.string('thursday_hours');
    table.string('friday_hours');
    table.string('saturday_hours');
    table.string('sunday_hours');
    table.integer('numberOfReviews');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('restaurants');
};
