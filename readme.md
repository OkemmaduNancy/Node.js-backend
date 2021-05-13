# Create user node js application

## How to run
1. clone the repository  [url](https://hhhhh.com)
2. navigate to the root directory
3. run `npm install` to install all dependencies
4. run `npm run start` to start the server
5. server runs on `port 4000`

## Base url:  `https://nancy-user-app.herokuapp.com/`

## REST API
The REST API to the app is described below.

## Save user : `/user`

### Request 
Provide the user details to sign up

`POST /users`

    curl --location --request POST 'https://localhost:4000/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "name": "Anuri",
    "email": "nancy.mary@gmail.com",
    "country": "uganda",
    "gender": "male",
    "age": 20,
    "password": "nancy2001"
    }'

**Successful Response:**
```json
    "gender": "male",
    "_id": "609cd72bbd03593b80555074",
    "name": "Anuri",
    "email": "nancy.mary@gmail.com",
    "password": "nancy2001",
    "age": 20,
    "country": "uganda",
    "createdAt": "2021-05-13T07:37:15.865Z",
    "updatedAt": "2021-05-13T07:37:15.865Z",
    "__v": 0
```

## Register

### Request

`POST /users`

```
    "name": "Anuri",
    "email": "nancy.mary@gmail.com",
    "country": "uganda",
    "gender": "male",
    "age": 20,
    "password": "nancy2001"
```

**Successful Response:**
```json
 "gender": "male",
    "_id": "609cd72bbd03593b80555074",
    "name": "Anuri",
    "email": "nancy.mary@gmail.com",
    "password": "nancy2001",
    "age": 20,
    "country": "uganda",
    "createdAt": "2021-05-13T07:37:15.865Z",
    "updatedAt": "2021-05-13T07:37:15.865Z",
    "__v": 0
```

## Update

### Request

`PUT /users/<id>`

Make changes at the user's details


```
    curl --location --request PUT 'https://localhost:4000/users/ 609cd72bbd03593b80555074' \
    --header 'Content-Type: application/json' \ 
     --data-raw '{
    "name": "Anuri",
    "email": "cynthia.mary@gmail.com",
    "country": "uganda",
    "gender": "male",
    "age": 20,
    "password": "nancy2001"
}'
```

**Successful Response:**
```json
{
    "gender": "male",
    "_id": "609cd72bbd03593b80555074",
    "name": "Anuri",
    "email": "cynthia.mary@gmail.com",
    "password": "nancy2001",
    "age": 20,
    "country": "uganda",
    "createdAt": "2021-05-13T07:37:15.865Z",
    "updatedAt": "2021-05-13T08:17:54.283Z",
    "__v": 0
}
```
## Retrieve

### Request

`GET /users/<id>`

Get the details of a specific user

```
    curl --location --request GET 'https://localhost:4000/users/609cd72bbd03593b80555074' \
```

**Successful Response:**
```json
{
    "gender": "male",
    "_id": "609cd72bbd03593b80555074",
    "name": "Anuri",
    "email": "cynthia.mary@gmail.com",
    "password": "nancy2001",
    "age": 20,
    "country": "uganda",
    "createdAt": "2021-05-13T07:37:15.865Z",
    "updatedAt": "2021-05-13T08:17:54.283Z",
    "__v": 0
}
```
`GET /all-users`
Get the details of all the users

``` 
    curl --location --request GET 'https://localhost:4000/all-users' \
```

**Successful Response:**
```json
[
    {
        "gender": "male",
        "_id": "609c67809f6ebf2dcce05b48",
        "name": "Anuri",
        "email": "cynthia.mary@gmail.com",
        "password": "nancy2001",
        "age": 20,
        "country": "uganda",
        "createdAt": "2021-05-12T23:40:48.400Z",
        "updatedAt": "2021-05-12T23:40:48.400Z",
        "__v": 0
    },
    {
        "gender": "male",
        "_id": "609cd101cc33a20004dd65c8",
        "name": "Anuri",
        "email": "cynthi.mary@gmail.com",
        "password": "nancy2001",
        "age": 20,
        "country": "uganda",
        "createdAt": "2021-05-13T07:10:57.713Z",
        "updatedAt": "2021-05-13T07:10:57.713Z",
        "__v": 0
    }
]
``` 

## Delete

### Request

`DELETE /users/<id>`

Delete the details of a specific user
```
curl --location --request GET 'https://localhost:4000/users/609cd72bbd03593b80555074' \
```

**Successful Response:**
```json
{
    "message": "User deleted successfully!"
}
```