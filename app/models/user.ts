import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasOne } from '@adonisjs/lucid/orm'
import Customer from './customer.js'
import { HasOne } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'

export default class User extends BaseModel {
  @hasOne(() => Customer)
  declare customer: HasOne<typeof Customer>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await hash.make(user.password)
  }
}