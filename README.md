# Telehealth Application Server
API Server for telehealth using nodejs microservice architecture.

### Prerequisits
- MongoDB database
- Node.js ~v8.4.0 and npm ~v5.3.0

### Micro Services (server)
There is two server for managing API Server(main app server) and other is for managing schedule meeting service.

### 1. APIGateway
This server contains the all API for communicating with telehealth application.

 ##### Environment Variables
These settings are found config/default.js file.
App reads config properties from the following environment variables:
- `NODE_ENV` : development / production.
- `PORT`: port to run the app on (ex: 3000).

##### Start server
> Run `npm install` to install all dependencies.
> Configure the environment variables.
> To start the api-server simply run :
-  `npm start`  or 
-  `node index.js`

##### API Documentation
-->TODO


### 2. Schedualr 
This server only interact with scheduling meeting API services.

 ##### Environment Variables
These settings are found config/default.js file.
App reads config properties from the following environment variables:
- `NODE_ENV` : development / production.
- `PORT`: port to run the app on (ex: 3000).
- `DB_URI`: mongodb database uri (ex: mongodb://localhost/db_schedula).

##### Start server
> Run `npm install` to install all dependencies.
> Configure the environment variables.
> To start the api-server simply run :
-  `npm start`  or 
-  `node index.js`

##### API Documentation
-->TODO