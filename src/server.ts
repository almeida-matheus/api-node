import express from 'express';

//iniciar express
const app = express();

//1: definir rota | 2: request,response
//http://localhost:3333/


app.get('/', (request, response) => {
    return response.json({ message: 'Hello World - NLW04' });
});

app.post('/', (request, response) => {
    //recebeu os dados para salvar
    return response.json({ message: 'Os dados foram salvos com sucesso!' });
});

// app.get('/users', (request, response) => {
//     return response.send('Hello World - NLW04');
// });

// criar servidor | 1 = porta
app.listen(3333, () => console.log("server is running"));