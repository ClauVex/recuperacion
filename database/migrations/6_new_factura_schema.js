'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewFacturaSchema extends Schema {
    up() {
        this.create('new_facturas', (table) => {
            table.increments()
            table.datetime('FECHA').notNullable();
            table.integer('IMP_PESOS').notNullable()
            table.integer('IMP_DOL').notNullable()
            table.integer('RFC').notNullable()
            table.integer('idHOJAPARTE').unsigned().references('id').inTable('new_hoja_de_partes').onUpdate('CASCADE').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('new_facturas')
    }
}

module.exports = NewFacturaSchema
