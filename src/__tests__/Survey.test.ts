import request from 'supertest';

import { app } from '../app';

import createConnection from '../database';

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new survey', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Title Example',
      description: 'Description Example',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Should be able to get all surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'Title Example 2',
      description: 'Description Example 2',
    });

    const response = await request(app).get('/surveys');

    //cadastrou 2 pesquisas, então espera que o tamanho do response seja 2
    expect(response.body.length).toBe(2);
  });
});

// describe("First", () => {
//   it("deve ser possível somar 2 números", () => {
//     expect(2+2).toBe(4)
//   });
// });

// describe("First", () => {
//   it("deve ser possível somar 2 números", () => {
//     expect(2+4).not.toBe(4)
//   });
// });

//yarn test
//PASS
//PASS