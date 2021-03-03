import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { UsersRepository } from '../repositories/UsersRepository';

//inserir os dados e salvar no banco de dados
class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    //passar a intidade q quer cirar o usuario
    //cria um repositorio de usuario
    //para acessar o repositorio, pega a intidade e reconhece, fazendo o mapeamento da tabela
    const usersRepository = getCustomRepository(UsersRepository);

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

    //201: create
    return response.status(201).json(user);
  }
}

export { UserController };