'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewRepuestoSchema extends Schema {
    up() {
        this.create('new_repuestos', (table) => {
            table.increments()
            table.string('DESCRIPCION', 45).notNullable()
            table.integer('COSTOUNIT').notNullable()
            table.integer('PRECIOUNIT').notNullable()
            table.integer('IMP_PARCIAL').notNullable()
            table.integer('idHOJADEPARTE').unsigned().references('id').inTable('new_hoja_de_partes').onUpdate('CASCADE').onDelete('CASCADE')
            table.integer('idMECANICODEPARTE').unsigned().references('id').inTable('new_mecanico_responsables').onUpdate('CASCADE').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('new_repuestos')
    }
}

module.exports = NewRepuestoSchema
