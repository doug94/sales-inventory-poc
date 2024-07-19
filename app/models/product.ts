import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Order from './order.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @hasMany(() => Order)
  declare order: HasMany<typeof Order>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productName: string

  @column()
  declare price: number

  @column()
  declare is_deleted: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}