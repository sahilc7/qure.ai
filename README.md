## Server
```sh
$ cd backend
``` 

## Install Dependencies
```sh
$ pip3 install --upgrade -r requirements.txt 
```

## Run server
```sh
$ python3 manage.py runserver 0.0.0.0:8000
```

## Client
```sh
$ cd client
``` 

## Install Dependencies
```sh
$ npm install
```

## Run - Development
```sh
$ npm run dev       # builds and hot reloads on changes
```

## Run - Production
```sh
$ npm run build     # builds production assets (transpile, minify, etc)
$ npm start         # Start express server and serves index.html
```

```
# Visit following link if using local env
```
localhost:http://127.0.0.1:4000/
```

## Docker

To run a production version in [docker](https://www.docker.com):
```sh
$ docker build -t qureai .   # Build docker container
$ docker run -d --name qureai -p 4000:4000 qureai  # Run docker container
```
App will be running at <http://localhost:4000>

```sh
$ docker stop qureai   # Stop container


## Note

```
- DjangoRestFramework used for serving the apis.
- Created a react app with redux, webpack for serving a simple table with search functionality on frontend.
- Didn't use create-react-app package for this assignment.
- SQLITE database for serving data provided.
- UI is responsive with fuzzy search :P
```
