# CRUD application using Nestjs, Reactjs and Postgresql 
This project is very base CRUD project using Nestjs, Reactjs, Postgresql for learning purpose only.

## Requirements
- Node >=10
- VS Code

## Dependencies
* [Nestjs](https://nestjs.com/)
* [Reactjs](https://reactjs.org/)
* [Postgresql](https://www.postgresql.org/)
* [Typescript](https://www.typescriptlang.org)

## Run Nestjs Server
- Step 1: Create a free Postgre database at https://www.elephantsql.com/ [step by step guide how to create postgre database https://blog.dbi-services.com/a-free-postgresql-cloud-database]

- Step 2: create a **.env** file at root directory of server (**nestjs-server**) with below variables. (Please change database configurations)
```
POSTGRES_HOST=xxxx.db.elephantsql.com
POSTGRES_PORT=xxxx
POSTGRES_USER=xxxxx
POSTGRES_PASSWORD=xxxxxx
POSTGRES_DATABASE=xxxxxx
PORT=3200
RUN_MIGRATIONS=true
```

- Step 3: npm install
- Step 4: npm run-script typeorm:migration:generate -- initialMigration
- Step 5: npm run-script typeorm:migration:run
- Step 6: npm start

## Run Reactjs Client
- Step 1: create a **.env** file at root directory of client (**reactjs-client**) with below variables.
```
REACT_APP_API_BASE=http://127.0.0.1:3200
```
- Step 2: npm install
- Step 3: npm start

Enjoy!! :blush:
