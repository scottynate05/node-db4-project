const db = require('../data/db-config.js');

function getRecipes() {
    return db('recipes');
}

function getRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function getIngredients(id) {
    return db('recipes as r')
        .join('ingredients as i', 'i.recipe_id', 'r.id')
        .select('i.name', 'i.quantity')
        .where({ recipe_id: id });
}

function getInstructions(id) {
    return db('recipes')
        .select('instructions')
        .where({ id });
}

module.exports = {
    getRecipes,
    getRecipeById,
    getIngredients,
    getInstructions
}