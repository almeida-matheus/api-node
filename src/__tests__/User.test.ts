import request from 'supertest';

import { app } from '../app';

//existe o createConnection do typeORM
import createConnection from '../database';

import { getConnection } from 'typeorm';


describe('Users', () => {
  
  //antes de tudo rodar migrations
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  //excluir a tabela depois de terminar
  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  //teste pra ver se criar um novo usuario da certo
  it('Should be able to create a new user', async () => {
        
    //esse processamento retorna uma promise
    const response = await request(app).post('/users').send({
      email: 'user@example.com',
      name: 'User Example',
    });

    expect(response.status).toBe(201);
  });

  //teste pra ver se criar um usuario com email repetido da errado
  it('should not be able to create a user with exist email', async () => {
    const response = await request(app).post('/users').send({
      email: 'user@example.com',
      name: 'User Example',
    });

    expect(response.status).toBe(400);
  });
});
