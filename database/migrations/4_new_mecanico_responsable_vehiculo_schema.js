'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NewMecanicoResponsableVehiculoSchema extends Schema {
    up() {
        this.create('new_mecanico_responsable_vehiculos', (table) => {
            table.increments()
            table.integer('idMECANICO').unsigned().references('id').inTable('new_mecanico_responsables').onUpdate('CASCADE').onDelete('CASCADE')
            table.integer('idVEHICULO').unsigned().references('id').inTable('new_vehiculos').onUpdate('CASCADE').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('new_mecanico_responsable_vehiculos')
    }
}

module.exports = NewMecanicoResponsableVehiculoSchema
