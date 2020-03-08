import authRouter from './auth'
import app from '../app';

const applyRoutes = (app) =>{
    app.use('/user', authRouter);
}

export default applyRoutes;