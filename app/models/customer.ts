import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import User from './user.js'
import { BelongsTo, HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import Address from './address.js'
import Telephone from './telephone.js'
import Order from './order.js'

export default class Customer extends BaseModel {
  @hasOne(() => Address)
  declare address: HasOne<typeof Address>

  @hasMany(() => Order)
  declare order: HasMany<typeof Order>

  @hasMany(() => Telephone)
  declare telephone: HasMany<typeof Telephone>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare cpf: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime
}