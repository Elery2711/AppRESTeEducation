import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import Routes
import routerAPI from './api/v1/education/routes/index';
// : imports Swagger
// : imports Routes
// : imports Middlewares
// : Config para variables de entorno
import config from './config/config';
// : Declaramos la variable app igualandola a express
const app = express();
// : Establece la conexion a la BD
import { mongoose } from './config/database.config';
// : Settings
app.set('port', config.PORT);
// : Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// : Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/Dr ', (req,res)=>{
    res.send(
        `<h1>RESTful running in Dr </h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

// Routes
routerAPI(app);

// Export App
export default app;