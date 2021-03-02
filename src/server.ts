//typeorm
import 'reflect-metadata'
//express
import express from 'express';
//database
import './database';
//router.ts
import { router } from './routes';

//iniciar express
const app = express();

//habilitar o trabalho com json
app.use(express.json());

//middleware
app.use(router);

// criar servidor | 1 = porta
app.listen(3333, () => console.log("server is running"));



//1: definir rota | 2: request,response
//http://localhost:3333/


// app.get('/', (request, response) => {
//     return response.json({ message: 'Hello World - NLW04' });
// });

// app.post('/', (request, response) => {
//     //recebeu os dados para salvar
//     return response.json({ message: 'Os dados foram salvos com sucesso!' });
// });

// app.get('/users', (request, response) => {
//     return response.send('Hello World - NLW04');
// });
