import { ServiceResponse } from "../Interfaces/ServiceResponse";
import { IToken } from "../Interfaces/Token";
import IUser from "../Interfaces/User";
import IUserModel from "../Interfaces/UserModel";
import UserModel from "../models/User";

export default class UserService {
  constructor (
    private userModel: IUserModel = new UserModel()
  ) {}

  public async findUser(login: IUser): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.find
  }
}