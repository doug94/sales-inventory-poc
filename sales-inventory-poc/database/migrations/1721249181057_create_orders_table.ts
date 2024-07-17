import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('customer_id').unsigned().references('customers.id')
      table.integer('product_id').unsigned().references('products.id')

      table.integer('quantity').notNullable()
      table.float('unit_price', 8, 2).notNullable()
      table.float('total_price', 8, 2).notNullable()
      table.timestamp('purchase_date_time')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}