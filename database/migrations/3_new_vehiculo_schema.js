'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewVehiculoSchema extends Schema {
    up() {
        this.create('new_vehiculos', (table) => {
            table.increments()
            table.string('MODELO', 45).notNullable();
            table.string('COLOR', 45).notNullable();
            table.datetime('FECHA_ENT').notNullable();
            table.time('HORA_ENT').notNullable();
            table.integer('CLIENTE_id').unsigned().references('id').inTable('new_clientes').onUpdate('CASCADE').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('new_vehiculos')
    }
}

module.exports = NewVehiculoSchema
