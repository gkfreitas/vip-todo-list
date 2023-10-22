import { Request, Response } from "express";
import TaskService from "../services/Task.service";

export default class TaskController {
  constructor(
    private taskService = new TaskService(),
  ) { }

  public async createTask(req: Request, res: Response) {
    const { body } = req;

    const ServiceResponse = await this.taskService.createTask(body)

    return res.status(200).json(ServiceResponse.data)
  }

  public async updatedTask(req: Request, res: Response) {
    const { body } = req;

    const { _id } = body

    const ServiceResponse = await this.taskService.updateTask(body, _id)

    if (ServiceResponse.status !== 'SUCCESSFUL') return res.status(404).json(ServiceResponse.data)

    return res.status(200).json(ServiceResponse.data)
  }

  public async deleteTask(req: Request, res: Response) {
    const { _id} = req.body

    const ServiceResponse = await this.taskService.deleteTask(_id);

    if (ServiceResponse.status !== 'SUCCESSFUL') return res.status(404).json(ServiceResponse.data)

    return res.status(200).json(ServiceResponse.data)
  }

  public async findAllTasks(req: Request, res: Response) {
    const ServiceResponse = await this.taskService.findAllTasks()

    return res.status(200).json(ServiceResponse.data)
  }

}