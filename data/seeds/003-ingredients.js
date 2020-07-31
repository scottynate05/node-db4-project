
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, quantity: 2, name: 'cans of beans'},
        {recipe_id: 1, quantity: 1, name: 'onion/s'},
        {recipe_id: 1, quantity: 1, name: 'chili seasoning packet'},
        {recipe_id: 2, quantity: 1, name: 'gallon of milk'},
        {recipe_id: 2, quantity: 1, name: 'steak'},
        {recipe_id: 2, quantity: 1, name: 'bag of jelly beans'},
        {recipe_id: 3, quantity: 1, name: 'bag of pasta'},
        {recipe_id: 4, quantity: 1, name: 'cherry'},
        {recipe_id: 4, quantity: 1, name: 'pie'}
      ]);
    });
};
