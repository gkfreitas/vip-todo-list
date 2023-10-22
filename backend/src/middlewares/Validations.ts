import { NextFunction, Request, Response } from 'express';
import { MongooseUserModel } from '../DB/models/UserModelMongoose';
import ILogin from '../Interfaces/Login';
import IRegister from '../Interfaces/Register';
import jwtUtil from '../utils/jwt.util';

function extractToken(authorization: string) {
  return authorization.split(' ')[1];
}

class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password }: ILogin = req.body;

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) return res.status(400).json({ message: 'Email não preenchido' });

    if (!password) return res.status(400).json({ message: 'Senha não preenchida' });

    if (!regex.test(email)) return res.status(401).json({ message: 'Email inválido' });

    if (password.length < 6) return res.status(401).json({ message: 'A senha deve ter mais que 6 caracteres' });

    next();
  }

  static validateRegister(req: Request, res: Response, next: NextFunction): Response | void {
    const { username, email, password }: IRegister= req.body;

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (username.length < 3) return res.status(401).json({ message: 'O nome de usuário deve ter mais que 3 caracteres' });

    if (!email) return res.status(400).json({ message: 'Email não preenchido' });

    if (!password) return res.status(400).json({ message: 'Senha não preenchida' });

    if (!regex.test(email)) return res.status(401).json({ message: 'Email inválido' });

    if (password.length < 6) return res.status(401).json({ message: 'A senha deve ter mais que 6 caracteres' });

    next();
  }

  static async validateToken(req: Request, res: Response, next: NextFunction):
  Promise<Promise<Response | void>> {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = extractToken(authorization);

    try {
      const decoded = jwtUtil.verify(token);
      const user = await MongooseUserModel.findOne({email: decoded.email });
      if (!user) return res.status(401).json({ message: 'Token must be a valid token' });
      next();
    } catch (e) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }


}

export default Validations;