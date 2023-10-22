import { Request, Response, Router } from 'express';
import TaskController from '../controllers/Task.controller';
import Validations from '../middlewares/Task.middleware';
const userController = new TaskController();

const router = Router();

router.post(
  '/',
  Validations.validateTask,
  (req: Request, res: Response) => userController.createTask(req, res),
);

router.put(
  '/',
  (req: Request, res: Response) => userController.updatedTask(req, res)
)

router.delete(
  '/',
  (req: Request, res: Response) => userController.deleteTask(req, res)
)
export default router;