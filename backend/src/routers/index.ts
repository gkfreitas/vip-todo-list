import { Router } from 'express';
import userRouter from './User.router';

const router = Router();


router.use('/login', userRouter);

export default router;