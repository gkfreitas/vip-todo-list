import * as jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: ObjectId,
  email: string,
};

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload {
  const data = jwt.verify(token, secret) as TokenPayload;
  return data;
}

export default {
  sign,
  verify,
};