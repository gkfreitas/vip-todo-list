import { MongooseUserModel } from "../DB/models/UserModelMongoose";
import IRegister from "../Interfaces/Register";
import IUser from "../Interfaces/User";
import IUserModel from "../Interfaces/UserModel";


export default class UserModel implements IUserModel {
  private model = MongooseUserModel

  public async find(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ email }).exec()

    if (!user) return null

    return user
  }

  public async create(register: IRegister): Promise<IUser> {
    const newUser = new this.model(register)

    await newUser.save()
  
    return newUser
  }
}