import { Router } from 'express';
import taskRouter from './Task.router';
import userRouter from './User.router';

const router = Router();


router.use('/login', userRouter);
router.use('/task', taskRouter)

export default router;