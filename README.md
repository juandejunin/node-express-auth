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

