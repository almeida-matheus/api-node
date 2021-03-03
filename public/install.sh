#!/usr/bin/env bash

## remover travas eventuais do apt
sudo rm /var/lib/dpkg/lock-frontend ; sudo rm /var/cache/apt/archives/lock ;

## atualizar repositório local
sudo apt update && 

## V1
##criar package.json pré configurado
# yarn init -y

##instalar dependencia express > microframework para criar rota, server, etc
yarn add express
##adicionar biblioteca para tipagem do express (ctrl + espace)
yarn add @types/express -D

##instalar typescript
yarn add typescript -D
##criar o arquivo de configurações do typescript
# yarn tsc --init

##comando para converter js para ts
#yarn add ts-node-dev -D

## V2
## database
npm install typeorm --save &&
npm install reflect-metadata --save &&
npm install @types/node --save-dev &&
## driver database sqlite
npm install sqlite3 --save &&
##install sqlite for linux debian derivate
# sudo apt install sqlite

##instalar biblioteca responsável por criar o uuid
yarn add uuid &&
##adicionar os tipos/tipagem da biblioteca
yarn add @types/uuid -D &&

##instalar biblioteca de testes
# yarn add jest @types/jest -D
##iniciar testes
# yarn jest --init
##habilitar ts nos testes
# yarn add ts-jest -D

#adicionar biblioteca supertest para teste de integração
# yarn add supertest @types/supertest -D




##rodar migrations
# yarn typeorm migration:run
##rodar testes
#yarn test


##Fim do Script
echo "Finish"

:<<- 'comentario'


comentario
