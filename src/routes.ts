import { Router } from 'express';

import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

//quando for na url /users vai ir e chamar a classe UserController de controller/UserController.ts
router.post('/users', userController.create);

export { router };