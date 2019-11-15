'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewMecanicoResponsableSchema extends Schema {
    up() {
        this.create('new_mecanico_responsables', (table) => {
            table.increments()
            table.string('NOMBRE', 45).notNullable()
            table.string('DIRECCION', 45).notNullable()
            table.string('TEL', 45).notNullable()
            table.decimal('COSTOXHORA', 4, 2).notNullable()
            table.string('CATEGORIA', 45).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('new_mecanico_responsables')
    }
}

module.exports = NewMecanicoResponsableSchema
