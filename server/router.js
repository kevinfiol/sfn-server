import { Router } from './deps.js';
import UserController from './controllers/UserController.js';

const router = new Router()
    .get('/user', UserController.index)
    .get('/user/:identifier', UserController.getUser)
;

export default router;