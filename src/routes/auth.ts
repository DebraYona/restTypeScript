import {Router} from 'express';
const router: Router = Router();
import {TokenValidation} from '../libs/verifyToken'

import {singup, singin, profile} from '../controllers/aut.controller'

router.post('/singup', singup)
router.post('/singin', singin)
router.get('/profile',TokenValidation, profile)

export default router;