import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('passeio', table => {
        table.increments('id').primary();
        table.string('modelo').notNullable();
        table.integer('anoFabricacao').notNullable();
        table.integer('qtdPortas').notNullable();
        table.string('marca').notNullable();
        table.json('texto').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('passeio')
}