## I wasn't able to acheive following things.

```
- I have pushed the image to docker hub but running two server on the same docker container I was facing a little bit of difficulty.
- Though you can pull the code from docker hub and client side will be served.
```

## Alternative

```
- To run the whole app follow the readme step after cloning directory to you local system.
```

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


# Visit following link if using local env
```
localhost:http://127.0.0.1:4000/
```

# Docker

To run a production version in [docker](https://www.docker.com):
```sh
$ docker pull sahilc007/qure.ai  # pull latest docker tag
$ docker run -d --name qure.ai -p 4000:4000 sahilc007/qure.ai  # Run docker container
```
App will be running at <http://localhost:4000>

```sh
$ docker stop sahilc007/qure.ai   # Stop container
```

## Note:

```
- DjangoRestFramework used for serving the apis.
- Created a react app with redux, webpack for serving a simple table with search functionality on frontend.
- Didn't use create-react-app package for this assignment.
- SQLITE database for serving data provided.
- UI is responsive with fuzzy search :P
```
