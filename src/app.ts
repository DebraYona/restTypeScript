import express , {Application}  from 'express';
import authRoutes from './routes/auth'

const app:Application= express();

//setting

app.set('port', 4000);

//routes

app.use(authRoutes)


export  default app