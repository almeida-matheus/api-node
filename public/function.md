## Funções dos arquivos

> node_modules:
- **arquivos de bibliotecas do nodejs**

> /src/server.ts:
- **inicia o servidor express, usa o routes.ts q chama o controller**
- obs: para iniciar o supertest sem iniciar o servidor, moveu tudo menos criar servidor para app.ts (app.ts recebe os erros e trata-os)

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

> services
- **criar todo serviço de envio de e-mail**
- criação da conta, enviar de e-mail
- no controller sendmail vai chama-lo

> views/emails
- **template de emails**

> .env
- variaveis de ambiente

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

constructor()
metodo executado assim que uma classe é chamada as informações dentro dele é executadas

envio de e-mail
controller/sendemail: adm repassa as informacoes do usuario para o sistema, e quando o sistema for chamado essa rota ele vai ter a responsabilidade de enviar o e-mail

calculo nps
detratores => 0 - 6
passivo => 7-8
promotores => 9-10

(n promotores - n detratores) / (n respondentes) * 100

inicializar um processo

exemplo de resposta ao acessar o link
http://localhost:3333/answers/10?u=09dac43b-4550-42fc-acdd-d8901103172d
valor adicionado
```json
{
   "id":"09dac43b-4550-42fc-acdd-d8901103172d",
   "user_id":"4d4c6966-78b3-407a-b6fd-29d6db7da658",
   "survey_id":"18bc72e6-7192-4a2f-9771-88455aa9b0b5",
   "value":10,
   "created_at":"2021-03-04T02:03:26.000Z"
}
```

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
```bash
yarn test

```
```bash
## V1
##criar package.json pré configurado
yarn init -y

##instalar dependencia express > microframework para criar rota, server, etc
# yarn add express
##adicionar biblioteca para tipagem do express (ctrl + espace)
# yarn add @types/express -D

##instalar typescript
# yarn add typescript -D
##criar o arquivo de configurações do typescript
yarn tsc --init

##comando para converter js para ts
yarn add ts-node-dev -D

## V2
## database
# npm install typeorm --save &&
# npm install reflect-metadata --save &&
# npm install @types/node --save-dev &&
## driver database sqlite
# npm install sqlite3 --save &&
##install sqlite for linux debian derivate
# sudo apt install sqlite

##instalar biblioteca responsável por criar o uuid
# yarn add uuid &&
##adicionar os tipos/tipagem da biblioteca
# yarn add @types/uuid -D &&

##instalar biblioteca de testes
# yarn add jest @types/jest -D
##iniciar testes
yarn jest --init
##habilitar ts nos testes
# yarn add ts-jest -D

#adicionar biblioteca supertest para teste de integração
# yarn add supertest @types/supertest -D


##rodar migrations
yarn typeorm migration:run
##rodar testes
yarn test
```