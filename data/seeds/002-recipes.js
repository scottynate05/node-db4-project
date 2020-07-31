
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Homestyle Chili',
          instructions: 'Soak beans overnight, add onions, seasoning, and someone that knows how to make homemade chili from scratch.'
        },
        {
          name: 'Milk-Steak and Jelly Beans',
          instructions: 'Bring steak to a steady milk boil (over hard), saute jelly beans over medium heat until super gross.'
        },
        {
          name: 'I love it when you call me big Pasta',
          instructions: 'Put your pans in the ay-er, if you\'s a true play-er. Noodles must come to a complete boil.'
        },
        {
          name: 'Cherry Pie',
          instructions: 'Cool drink of water such a sweet surprise.'
        }
      ]);
    });
};
