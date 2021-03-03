## Funções dos arquivos

> node_modules:
- **arquivos de bibliotecas do nodejs**

> /src/server.ts:
- **inicia o servidor express, usa o routes.ts q chama o controller**
- obs: para iniciar o supertest sem iniciar o servidor, moveu tudo menos criar servidor para app.ts

> /src/database/index.ts
- **cria a conexão com o banco de dados utilizado o typeORM**

> /src/database/migrations/1614629804112-CreateUsers.ts
- **é a estrutura e histórico do banco de dados**
- é aqui que a tabela é criada
- através das migrations verifica as atualizações na tabela

> /src/routes.ts
- **é definição das rotas**
- quando acessar /users vai para a classe UserController

> /src/controllers/UserController.ts
- **define a funcionalidade do sistema, as regras de negocio, execuções**
- um controller pra cada funcionalidade do sistema
- no caso ele vai criar um dado na tabela consultando o models/Users.ts
- retorna o json do q ele recebeu do models/Users.ts

> /src/models/Users.ts
- **define a funcionalidade do sistema, as regras de negocio, execuções**
- assim como o migration/createUser.ts é declarado o nome das colunas
- aqui faz o calculo do id e realmente salva no banco de dados

> repositories
- Serve como repositório customizado para o UserController getCustomRepository
- routes -> Controller -> /repositories/UsersRepository com base no /model/User;

> ormconfig.json:
- **módulo que gerencia o banco de dados**
- definir o banco de dados e diretorio; migrations e direto; identidades

> package.json:
- **arquivo de configuração geral do projeto**
- local do script do server, dependências

> tsconfig.json
- **arquivo de configurações do typescript**

> jest.config.ts
- **arquivo de configuração dos testes do jest**

## Comandos

server:
`server.ts cria o server com base no app.ts que consulta o /src/database/index.ts para criar o banco e tabela`

**request:**
`request → routes → controller → repository (faz a criação pq extende o /model/.ts`
**response:**
`repository → controller → response`


inicializar um processo

```bash
yarn dev
```

finalizar um processo

```bash
pkill node
```
iniciar um test
```bash
yarn test
```