'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewClientesSchema extends Schema {
    up() {
        this.create('new_clientes', (table) => {
            table.increments()
            table.string('NOMBRE', 45).notNullable()
            table.string('DIRECCION', 45).notNullable()
            table.string('TELEFONO', 45).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('new_clientes')
    }
}

module.exports = NewClientesSchema
