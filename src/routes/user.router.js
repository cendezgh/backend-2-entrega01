import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const controller = new UserController();

const router = Router();

router.post('/register', controller.register);

router.post('/login', controller.login);


export default router;