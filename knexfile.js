// Update with your config settings.

module.exports = {

  test: {
    client: 'postgresql',
    connection: {
      database: 'yelp_db'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    // debug: true,
    connection: {
      database: 'yelp_db'
    },
    migrations : {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },


  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
