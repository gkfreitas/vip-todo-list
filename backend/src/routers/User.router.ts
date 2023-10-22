import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => userController.findUser(req, res),
);

export default router;