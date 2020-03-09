import authRouter from './auth'
import app from '../app';
import shopRouter from './shop'

const applyRoutes = (app) =>{
    app.use('/user', authRouter);
    app.use('/shop', shopRouter);
}

export default applyRoutes;