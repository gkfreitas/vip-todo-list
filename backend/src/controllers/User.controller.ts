import { Request, Response } from "express";
import ILogin from "../Interfaces/Login";
import IRegister from "../Interfaces/Register";
import UserService from "../services/User.service";

export default class LoginController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async findUser(req: Request, res: Response) {
    const { email, password }: ILogin = req.body
    
    const ServiceResponse = await this.userService.findUser({ email, password});

    if (ServiceResponse.status !== 'SUCCESSFUL') return res.status(401).json(ServiceResponse.data);

    return res.status(200).json(ServiceResponse.data);
  }

  public async createUser(req: Request, res: Response) {
    const { username, email, password}: IRegister = req.body

    const ServiceResponse = await this.userService.createUser({username, email, password});

    if (ServiceResponse.status !== 'SUCCESSFUL') return res.status(401).json(ServiceResponse.data);

    return res.status(200).json(ServiceResponse.data)
  }


}