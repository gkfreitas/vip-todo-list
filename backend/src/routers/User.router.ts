import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import Validations from '../middlewares/Validations';
const userController = new UserController();

const router = Router();

router.post(
  '/',
  Validations.validateLogin,
  (req: Request, res: Response) => userController.findUser(req, res),
);

router.post(
  '/create',
  Validations.validateRegister,
  (req: Request, res: Response) => userController.createUser(req, res)
)

export default router;