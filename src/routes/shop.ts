import {Router} from 'express';
const router:Router= Router();
import {TokenValidation} from '../libs/verifyToken' 



import { products, addProducts} from '../controllers/shop.controller'

//router.get('/', shop);
router.get('/:page', products);
router.post('/',addProducts);

export default router;