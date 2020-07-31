
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .unique()
                .notNullable();
            tbl.string('instructions')
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id');
                // .references('recipe.id')
                // .onDelete('CASCADE')
                // .onUpdate('CASCADE');
            tbl.float('quantity')
                .notNullable();
            tbl.string('name', 128)
                .unique()
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
