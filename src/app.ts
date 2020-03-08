import express , {Application}  from 'express';
import morgan from 'morgan'; 
import authRoutes from './routes/auth'

const app:Application= express();

//setting

app.set('port', 4000);

//routes

app.use(authRoutes)

//middlewares
app.use(morgan('dev'));


export  default app