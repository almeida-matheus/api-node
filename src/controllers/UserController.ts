import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';

//inserir os dados e salvar no banco de dados
class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    //passar a intidade q quer cirar o usuario
    //cria um repositorio de usuario
    const usersRepository = getRepository(User);

    //extrair um emaail e se ele existir retornar status e mensagem de err
    //find/one = SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) {
      return response.status(400).json({ error: 'User already exists!' });
    }

    const user = usersRepository.create({
      name,
      email,
    });
    //retorna uma promise, então precisa usar o await
    await usersRepository.save(user);

    return response.json(user);
  }
}

export { UserController };