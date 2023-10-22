import { ObjectId } from "mongoose";
import { MongooseTaskModel } from "../DB/models/TaskModelMongoose";
import ITaskModel from "../Interfaces/ITaskModel";
import ITask from "../Interfaces/Task";


export default class TaskModel implements ITaskModel {
  
  private model = MongooseTaskModel

  public async create(task: ITask): Promise<ITask> {
    const newTask = new this.model(task)

    await newTask.save()
  
    return newTask
  }

  public async update(task: ITask, id: ObjectId): Promise<ITask | null> {

    try {
      await this.model.findByIdAndUpdate(id, task).exec()

      const taskUpdated = await this.model.findById(id).exec()

      return taskUpdated
    } catch(error) {
      return null
    }
    
  }
  
  public async delete(id: ObjectId): Promise<ITask | null> {
    try {
      const oldTask = await this.model.findByIdAndDelete(id).exec()
      return oldTask
    } catch(error) {
      return null
    }
  }

  public async findAll(): Promise<ITask[]> {
    const allTasks = await this.model.find().exec()
    return allTasks

  }

}