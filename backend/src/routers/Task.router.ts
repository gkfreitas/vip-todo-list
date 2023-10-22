import { Request, Response, Router } from 'express';
import TaskController from '../controllers/Task.controller';

const userController = new TaskController();

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => userController.createTask(req, res),
);

router.put(
  '/',
  (req: Request, res: Response) => userController.updatedTask(req, res)
)
export default router;