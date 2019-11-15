'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewHojaDeParteSchema extends Schema {
    up() {
        this.create('new_hoja_de_partes', (table) => {
            table.increments().unique()
            table.string('CONCEPTO', 45).notNullable()
            table.integer('CANTIDAD', 11).notNullable()
            table.string('REPARACION', 45).notNullable()
            table.integer('idMECANICORESPONSABLE').unsigned().references('id').inTable('new_mecanico_responsables').onUpdate('CASCADE').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('new_hoja_de_partes')
    }
}

module.exports = NewHojaDeParteSchema
