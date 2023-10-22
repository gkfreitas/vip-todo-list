import { ObjectId } from "mongoose";

export default interface IUser {
  id: ObjectId,
  username: string,
  email: string,
  password: string,
}