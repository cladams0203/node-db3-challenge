// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true, // needed for sqlite
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    //   },
    // },
  }, 
  staging: {
    client: 'pastgresql',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      database: 'schemes',
      user: 'chris',
      password: 'password'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }
};
