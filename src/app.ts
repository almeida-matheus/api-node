//typeorm
import 'reflect-metadata'
//express
import express from 'express';
//database
// import './database';
import createConnection from './database';

//router.ts
import { router } from './routes';

//ao invés de ir direto naquele banco vai passar pela verificação do database/index.ts
createConnection();
//iniciar express
const app = express();

//habilitar o trabalho com json
app.use(express.json());
//middleware
app.use(router);

export { app };
