import { Request, Response, Router } from 'express';
import TaskController from '../controllers/Task.controller';
import Validations from '../middlewares/Task.middleware';
import LoginValidations from '../middlewares/User.middleware';
const userController = new TaskController();

const router = Router();

router.get(
  '/',
  LoginValidations.validateToken,
  (req: Request, res: Response) => userController.findAllTasks(req, res)
)

router.post(
  '/',
  LoginValidations.validateToken,
  Validations.validateTask,
  (req: Request, res: Response) => userController.createTask(req, res),
);

router.put(
  '/',
  LoginValidations.validateToken,
  Validations.validateTask,
  (req: Request, res: Response) => userController.updatedTask(req, res)
)

router.delete(
  '/',
  LoginValidations.validateToken,
  (req: Request, res: Response) => userController.deleteTask(req, res)
)
export default router;