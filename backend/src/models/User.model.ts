import { MongooseUserModel } from "../DB/models/MongooseUserMode";
import ILogin from "../Interfaces/Login";
import IUser from "../Interfaces/User";
import IUserModel from "../Interfaces/UserModel";


export default class UserModel implements IUserModel {
  private model = MongooseUserModel

  async find(login: ILogin): Promise<IUser | null> {
    const { email } = login;
    const user = await this.model.findOne({ email }).exec()
    if (!user) return null
    return user
  }
}