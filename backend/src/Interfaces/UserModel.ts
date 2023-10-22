import IRegister from "./Register"
import IUser from "./User"

export default interface IUserModel {
  find(email: string): Promise<IUser | null>
  create(register: IRegister): Promise<IUser>
}