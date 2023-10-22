import { ObjectId } from "mongoose";
import ITask from "./Task";

export default interface ITaskModel {
  create(task: ITask): Promise<ITask>
  update(task: ITask, id: ObjectId): Promise<ITask | null>
  delete(id: ObjectId): Promise<ITask | null>
  findAll(): Promise<ITask[]>
}