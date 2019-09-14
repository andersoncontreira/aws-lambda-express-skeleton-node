# Aws Node Lambda Serverless Skeleton


Boilerplate to build simple lambda functions with RESTful API


 
 <!-- badges -->
 <!--
 [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE) 
 [![Build Status](https://travis-ci.org/andersoncontreira/http-tunnel-node.svg?branch=master)](https://travis-ci.org/andersoncontreira/http-tunnel-node)
 [![codecov](https://codecov.io/gh/andersoncontreira/http-tunnel-node/branch/master/graph/badge.svg)](https://codecov.io/gh/andersoncontreira/http-tunnel-node)
 -->
 <!-- -->
 
 ## Purpose
 This project can be used for everyone to create lambda functions containing APIs with RESTful. 
 It are build with aws-express.
    
  
 
 
 ## Last updates 
 In this section contains the release notes of the project.
 
 > Version 0.0.1
 

 Initial version of the project
 
 All the changes must be tracked in [CHANGELOG.md](CHANGELOG.md)
 
 ## Prerequisites
 * node: 6.10+
 * aws-sdk
 * aws-serverless-express
 * node-cache
 * uuid
 
 ### development
 * nodemon
 * jest
   
 ## Features
 * Provides an structure for lambda function environment.
 
 ## Installation
 
 The first step is the installation of [Node.js](https://nodejs.org/en/), even though it is not installed.
 The installation is done using the command `npm`  
 
 ``` 
 npm install 
 ``` 
 The Development dependencies can be installed by this command:
 ``` 
 npm install --only=dev
 ``` 
 
 ## Getting started
 ### Running locally for testing and development
 
 This application are build for Aws Lambda functions, but to run locally this application uses the `express` module.
 To run the application locally you need execute the follow command:
 
 ``` 
 node server.js 
 ```
 Or via npm: 
 ``` 
 npm server
 ```
 
 ### Running tests
 
 To run the unit tests of the project you can execute the follow command:
 ``` 
 npm test
 ```
 ### Usage
 
 Open the browser of your preference and go to [localhost:3000](http://localhost:300).
 
 After change the url to:
 * http://localhost:3000/demo/v1/person
 
 Response: 
 ```
 {
     "result": true,
     "message": "Person list success",
     "data": [
         {
             "uuid": "1da3c840-d688-11e9-a1e2-ff2b6767f962",
             "firstName": "João",
             "lastName": "Silva",
             "email": "joao.silva@teste.com",
             "photo": "",
             "deleted": "0",
             "active": "1",
             "createdAt": "2019-09-14T00:39:31.268Z",
             "updatedAt": null,
             "deletedAt": null
         },
         {
             "uuid": "1da41660-d688-11e9-a1e2-ff2b6767f962",
             "firstName": "Maria",
             "lastName": "Silva",
             "email": "maria.silva@teste.com",
             "photo": "",
             "deleted": "0",
             "active": "1",
             "createdAt": "2019-09-14T00:39:31.270Z",
             "updatedAt": null,
             "deletedAt": null
         }
     ]
 }
 ```
 
 There is an example of an API response using a cache memory only for this demonstration, you can apply an dynamoDB or other DB of you preference. 
 
 
 <!--
 ## Docs and references
    * [Docs] (https://github.com/Rentcars)
    * [Swagger] (https://github.com/Rentcars)
    * [Others] (https://github.com/Rentcars)
 -->
 ## License
 Code released under the [LICENSE](LICENSE)  
 
 ## Contributors
 
 * Anderson de Oliveira Contreira [andersoncontreira](https://github.com/andersoncontreira)
 
 ## Contributions 
  Pull requests and new issues are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for details. 
