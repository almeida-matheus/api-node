import { EntityRepository, Repository } from 'typeorm';

import { Survey } from '../models/Survey';

//é o repositorio de pesquisa
//entidade = survey,
@EntityRepository(Survey)
//ctrl + click no Repository = ver os metodos do tyeorm
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
