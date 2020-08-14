import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('moto', table => {
        table.increments('id').primary();
        table.integer('qtdRodas').notNullable();
        table.integer('passageiros').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('moto')
}