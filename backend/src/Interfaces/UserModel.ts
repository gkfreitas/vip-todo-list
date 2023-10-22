import ILogin from "./Login"
import IUser from "./User"

export default interface IUserModel {
  find(login: ILogin): Promise<IUser | null>
}