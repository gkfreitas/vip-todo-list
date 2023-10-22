import * as bcrypt from 'bcrypt';
import ILogin from '../Interfaces/Login';
import IRegister from '../Interfaces/Register';
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

    const { email: emailLogin, password: passwordLogin} = login

    const user = await this.userModel.find(emailLogin)
    
    if (!user || !bcrypt.compareSync(passwordLogin, user.password)) {
      return { status: 'NOT_FOUND', data: { message: 'Invalid email or password' } };
    }
    const { id, email } = user;

    const token = jwtUtil.sign({ id, email });

    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async createUser(register: IRegister): Promise<ServiceResponse<IRegister>> {
    const { username: usernameRegister, email: emailRegister, password: passwordRegister } = register

    const existingUser = await this.userModel.find(emailRegister)

    if (existingUser) return { status: 'CONFLICT', data: { message: 'Email já registrado'}}
    
    const passwordHash = await bcrypt.hash(passwordRegister, 10)

    const userRegister = {
      username: usernameRegister, 
      email: emailRegister, 
      password: passwordHash
    }

    const newUser = await this.userModel.create(userRegister)

    const { email, username, password} = newUser

    return { status: 'SUCCESSFUL', data: {email, username, password}}
  }
}
