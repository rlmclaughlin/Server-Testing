
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'rowValueA'},
        {id: 2, username: 'rowValueB'},
        {id: 3, username: 'rowValueC'}
      ]);
    });
};
