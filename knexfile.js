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
    connection: {
      database: 'postgres://jatigrdzbvgoba:42b3422665a9b10bdbcea0ea5527dce8fcba3e0ea872436743a6daa60a5898f3@ec2-184-73-236-170.compute-1.amazonaws.com:5432/d6hgu61jgca0gg'
    },
    migrations: {
      directory: __dirname + '/db/seeds/production'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
