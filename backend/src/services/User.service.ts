import * as bcrypt from 'bcrypt';
import ILogin from '../Interfaces/Login';
import { ServiceResponse } from "../Interfaces/ServiceResponse";
import { IToken } from "../Interfaces/Token";
import IUserModel from "../Interfaces/UserModel";
import UserModel from "../models/User.model";
import jwtUtil from '../utils/jwt.util';

export default class UserService {
  constructor (
    private userModel: IUserModel = new UserModel()
  ) {}

  public async findUser(login: ILogin): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.find(login)
    if (!user || !bcrypt.compareSync(login.password, user.password)) {
      return { status: 'NOT_FOUND', data: { message: 'Invalid email or password' } };
    }
    const { id, email } = user;

    const token = jwtUtil.sign({ id, email });
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
