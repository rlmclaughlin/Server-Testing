
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments(); 
    table.string('username').notNullable().unique(); 
    table.string('password').notNullable(); 
    table.string('post').notNullable(); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(); 
};
