import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm';

import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class NpsController {
  async execute(request: Request, response: Response) {
    //parametro q passa na rota
    //recebeu o id do usuario q quer ver o nps
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    //cria um array referente a todas as respostas dessa pesquisa q nao tenha value como nulo
    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    //filtrar os valores
    //filter: vai filtrar de 1 a 1 de acordo com o match da condição
    //vai trazer um array
    const detractor = surveysUsers.filter(
      survey => survey.value >= 0 && survey.value <= 6,
    ).length;

    const promoters = surveysUsers.filter(
      survey => survey.value >= 9 && survey.value <= 10,
    ).length;

    const passive = surveysUsers.filter(
      survey => survey.value >= 7 && survey.value <= 8,
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number(
      (((promoters - detractor) / totalAnswers) * 100).toFixed(2),
    );

    return response.json({
      detractor,
      promoters,
      passive,
      totalAnswers,
      nps: calculate,
    });
  }
}

export { NpsController };
