import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Customer from './customer.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Telephone extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare customerId: number

  @belongsTo(() => Customer)
  declare customer: BelongsTo<typeof Customer>

  @column()
  declare ddd: string

  @column()
  declare phoneNumber: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}