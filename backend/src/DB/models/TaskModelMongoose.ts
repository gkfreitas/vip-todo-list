import { Schema, model } from 'mongoose'
import ITask from '../../Interfaces/Task'

export const userSchema: Schema = new Schema<ITask>({
  taskName: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  dueDate: {
    type: Date,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  },
  description:{
    type: String,
    required: true,
  }
},{ timestamps: true})

export const MongooseUserModel = model<ITask>('User', userSchema)