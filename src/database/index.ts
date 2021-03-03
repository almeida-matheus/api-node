// import { createConnection } from 'typeorm';

// createConnection();

//para utilizar o super test e criar um banco de dados de teste
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

// exportar uma função assincorota q vai retornar o connection do typeorm
export default async (): Promise<Connection> => {

    //pegar todas as informações que está no ormconfig
    const defaultOptions = await getConnectionOptions();

    //verificar se o comando é de qual ambiente
    // verifica se a variavel de ambiente é teste, se for usa determinado banco
    // se nao for usa o determinado banco padrão
    return createConnection(
        //vai pegar o objeto e sobrescrever alterando o database
        // de a variavel for = teste usa esse banco test.sqlite, se nao usa o padrão
        Object.assign(defaultOptions, {
            database:
                process.env.NODE_ENV === 'test'
                    ? './src/database/database.test.sqlite'
                    : defaultOptions.database,
        }),
    );
};

