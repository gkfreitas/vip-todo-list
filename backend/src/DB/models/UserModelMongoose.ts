import { Schema, model } from 'mongoose'
import IUser from '../../Interfaces/User'

export const userSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true
  },
},{ timestamps: true})

export const MongooseUserModel = model<IUser>('User', userSchema)