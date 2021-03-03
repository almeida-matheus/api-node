// 1 - falar q vai poder utilizar todos os metodos do typeORM (findOne, create)
import { EntityRepository, Repository } from 'typeorm';

import { User } from '../models/User';

//fazer a herança de classes com o user repository
//extend permite q ela contenha todos os metodos do getRepository
@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };

