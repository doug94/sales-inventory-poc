import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customer_id').unsigned().references('customers.id').onDelete('CASCADE')

      table.string('street_name').notNullable()
      table.integer('street_number')
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('zip_code').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}