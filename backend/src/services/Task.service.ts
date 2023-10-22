import { ObjectId } from 'mongoose';
import ITaskModel from '../Interfaces/ITaskModel';
import { ServiceResponse } from "../Interfaces/ServiceResponse";
import ITask from '../Interfaces/Task';
import TaskModel from '../models/Task.model';

export default class TaskService {
  constructor (
    private taskModel: ITaskModel = new TaskModel()
  ) {}

  public async createTask(task: ITask): Promise<ServiceResponse<ITask>> {
    const newTask = await this.taskModel.create(task)
    return { status: 'SUCCESSFUL', data: newTask}
  }

  public async updateTask(task: ITask, id:ObjectId): Promise<ServiceResponse<ITask>> {
    const updatedTask = await this.taskModel.update(task, id)

    if (!updatedTask) return { status: 'NOT_FOUND', data: {message: 'ID não encontrado'}}

    return { status: 'SUCCESSFUL', data: updatedTask}
  }
}
