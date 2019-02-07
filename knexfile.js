module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/project.db'
      },
      useNullAsDefault: true,
      migrations: {
          directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
          }
    }
  };