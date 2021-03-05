import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';

import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
//http://localhost:3333/answers/10?u=7a815cdf-bd51-4ac7-aa7c-0853af0e35f6

//http://localhost:3333/answers/10/8?u=09dac
//route params => parametros q compoe a rota, obrigado
//routes.get("/answers/:value:/nota")
//query params => busca, paginacao, não obrigatorios
//chave=valor

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    //buscar os parametros e ver se existe
    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError('Survey User does not exists!');
    }

    //models > value é number
    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController };
