import express , {Application}  from 'express';
import morgan from 'morgan'; 
import bodyParser from 'body-parser';

//import appliRoutes from './routes/index'
import appliRoutes from './routes/index'

const app:Application= express();

//setting

app.set('port', 4400);
//middlewares
app.use(bodyParser.json());


app.use(morgan('dev'));
//routes
appliRoutes(app)
//app.use(appliRoutes)





export  default app