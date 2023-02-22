# node-express-auth

## Levantar el proyecto en Windows 10 o superior

### Clonar el repositorio en local
git clone https://github.com/juandejunin/node-express-auth.git

### Instalar dependencias
npm i

### Crear archivo .env

PORT = 4000

JWT_SECRET_KEY = 'xxxxxxxxxxxxx'

BBDD_URI=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

## Levantar el servidor
npm run dev
## Endpoint Desarrollo

## Registrar usuario
http://127.0.0.1:4000/api/auth/signup

### Recibe
 una peticion POST en formato json 

Ej:
{
    "username":"Joe",
    "email":"joe@gmail.com",
    "password":"password",
  
}


### Retorna
En caso exitoso  un json con las siguientes caracteristicas

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjViYjJhMDYzZmVjMmNlYmY0ZjIwYSIsImlhdCI6MTY3NzA0ODYxOCwiZXhwIjoxNjc3MTM1MDE4fQ.CGgT8Ss5N5rEWpO-bcc13TMVEP1vNYIQfYRz2SYygzc"
}

Si el username o el email  ingresado ya existe retorna lo siguiente:

{
    "message": "The user already exists"
}


### Login usuario 
http://127.0.0.1:4000/api/auth/signin

### Recibe
 una peticion POST en formato json 

{
    "email": "joe@gmail.com",
    "password": "password"
}

### Retorna

En caso exitoso:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80"
}

Si el usuario solicitado no existe

{
    "message": "user not found"
}


Si la contraseña no es correcta
{
    "token": null,
    "message": "Invalid Password"
}

## Endpoint Produccion

## Registrar usuario

https://node-express-auth-production.up.railway.app/api/auth/signup

### Recibe
 una peticion POST en formato json 

Ej:
{
    "username":"Joe",
    "email":"joe@gmail.com",
    "password":"password",
  
}


### Retorna
En caso exitoso  un json con las siguientes caracteristicas

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjViYjJhMDYzZmVjMmNlYmY0ZjIwYSIsImlhdCI6MTY3NzA0ODYxOCwiZXhwIjoxNjc3MTM1MDE4fQ.CGgT8Ss5N5rEWpO-bcc13TMVEP1vNYIQfYRz2SYygzc"
}


Si el username o el email  ingresado ya existe retorna lo siguiente:

{
    "message": "The user already exists"
}


### Login usuario 
https://node-express-auth-production.up.railway.app/api/auth/signin

### Recibe
 una peticion POST en formato json 

{
    "email": "joe@gmail.com",
    "password": "password"
}

### Retorna

En caso exitoso:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80"
}

Si el usuario solicitado no existe

{
    "message": "user not found"
}


Si la contraseña no es correcta
{
    "token": null,
    "message": "Invalid Password"
}

## subscription 
 
https://node-express-auth-production.up.railway.app/api/subscription

### Obtener todas las suscripciones

Metodo: GET

HEADERS
KEY:Content-Type  VALUE:application/json

KEY:x-access-token  VALUE: el token generado al realizar el login ejemplo:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80

Retorna json 
[
    {
        "_id": "63f5e9d3202845d926279b71",
        "name": "ElcabledelPueblo",
        "paymentDate": "2023-04-23T00:00:00.000Z",
        "price": 5,
        "createdAt": "2023-02-22T10:09:23.636Z",
        "updatedAt": "2023-02-22T10:09:23.636Z"
    },
    {
        "_id": "63f5ea03202845d926279b74",
        "name": "netflix",
        "paymentDate": "2023-04-13T00:00:00.000Z",
        "price": 7.99,
        "createdAt": "2023-02-22T10:10:11.203Z",
        "updatedAt": "2023-02-22T10:10:11.203Z"
    },
    {
        "_id": "63f5ea19202845d926279b77",
        "name": "youytube",
        "paymentDate": "2023-04-15T00:00:00.000Z",
        "price": 7.99,
        "createdAt": "2023-02-22T10:10:33.397Z",
        "updatedAt": "2023-02-22T10:10:33.397Z"
    }
]


### Crear nueva suscripcion
Metodo: POST

https://node-express-auth-production.up.railway.app/api/subscription


HEADERS
KEY:Content-Type  VALUE:application/json

KEY:x-access-token  VALUE: el token generado al realizar el login ejemplo:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80

ESPERA:
{
    "name": "ElcabledelPueblo",
    "paymentDate": "2023-04-23" ,
    "price": 5   
}
RETORNA
{
    "name": "ElcabledelPueblo",
    "paymentDate": "2023-04-23T00:00:00.000Z",
    "price": 5,
    "_id": "63f5e757826f008dabc9326c",
    "createdAt": "2023-02-22T09:58:47.668Z",
    "updatedAt": "2023-02-22T09:58:47.668Z"
}
### Actualizar suscripcion
Metodo: PUT

https://node-express-auth-production.up.railway.app/api/subscription/:id

Pasando por url el parametro _id (que obtenemos cuando creamos la suscripcion o bien cuando consultamos con GET las suscripciones existentes) ejemplo:

{
    "name": "ElcabledelPueblo",
    "paymentDate": "2023-04-23T00:00:00.000Z",
    "price": 5,
    "_id": "63f5e757826f008dabc9326c",
    "createdAt": "2023-02-22T09:58:47.668Z",
    "updatedAt": "2023-02-22T09:58:47.668Z"
}

en la cuarta linea observamos el "_id":"63f5e757826f008dabc9326c"

esta cadena alfanumerica es la que debemos pasar por url ( sin comillas) 63f5e757826f008dabc9326c

https://node-express-auth-production.up.railway.app/api/subscription/63f5e757826f008dabc9326c

HEADERS
KEY:Content-Type  VALUE:application/json

KEY:x-access-token  VALUE: el token generado al realizar el login ejemplo:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80

En el body se pasan los datos que se desea modificar
 Ejemplo:
{
    "name": "Elcabledelaciudad",
    "paymentDate": "2023-05-23T00:00:00.000Z",
    "price": 6,
}

### Eliminando suscripcion
Metodo: DELETE

https://node-express-auth-production.up.railway.app/api/subscription/:id

Pasando por url el parametro _id (que obtenemos cuando creamos la suscripcion o bien cuando consultamos con GET las suscripciones existentes) ejemplo:

{
    "name": "ElcabledelPueblo",
    "paymentDate": "2023-04-23T00:00:00.000Z",
    "price": 5,
    "_id": "63f5e757826f008dabc9326c",
    "createdAt": "2023-02-22T09:58:47.668Z",
    "updatedAt": "2023-02-22T09:58:47.668Z"
}

en la cuarta linea observamos el "_id":"63f5e757826f008dabc9326c"

esta cadena alfanumerica es la que debemos pasar por url ( sin comillas) 63f5e757826f008dabc9326c

https://node-express-auth-production.up.railway.app/api/subscription/63f5e757826f008dabc9326c

HEADERS
KEY:Content-Type  VALUE:application/json

KEY:x-access-token  VALUE: el token generado al realizar el login ejemplo:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80

### Mostrando una  suscripcion
Metodo: GET

https://node-express-auth-production.up.railway.app/api/subscription/:id

Pasando por url el parametro _id (que obtenemos cuando creamos la suscripcion o bien cuando consultamos con GET las suscripciones existentes) ejemplo:

{
    "name": "ElcabledelPueblo",
    "paymentDate": "2023-04-23T00:00:00.000Z",
    "price": 5,
    "_id": "63f5e757826f008dabc9326c",
    "createdAt": "2023-02-22T09:58:47.668Z",
    "updatedAt": "2023-02-22T09:58:47.668Z"
}

en la cuarta linea observamos el "_id":"63f5e757826f008dabc9326c"

esta cadena alfanumerica es la que debemos pasar por url ( sin comillas) 63f5e757826f008dabc9326c

https://node-express-auth-production.up.railway.app/api/subscription/63f5e757826f008dabc9326c


HEADERS
KEY:Content-Type  VALUE:application/json

KEY:x-access-token  VALUE: el token generado al realizar el login ejemplo:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUzY2U4NzVlNzBhNDg4MTZjOWFhNSIsImlhdCI6MTY3NzA0ODgwOSwiZXhwIjoxNjc3MTM1MjA5fQ.zPa_O01pzvfgiQcMvDdYxkNBamp8Su0N0cSmuzC1q80

