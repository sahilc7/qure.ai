# Use an official Python runtime as a parent image
# FROM python:3.6-slim
FROM nikolaik/python-nodejs:latest
# Adding backend directory to make absolute filepaths consistent across services
RUN mkdir /app
RUN mkdir /app/backend
RUN mkdir /app/client

WORKDIR /app/backend

# Install Python dependencies
COPY backend/requirements.txt /app/backend
RUN pip3 install --upgrade -r requirements.txt

# Add the rest of the code
COPY ./backend /app/backend

# Make port 8000 available for the app
EXPOSE 8000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python3 manage.py runserver 0.0.0.0:8000

WORKDIR /app/client

# Install JS app dependencies
COPY client/package.json /app/client
RUN npm install node-zopfli
RUN npm install

# Add files needed to build the app
# Copy the application `src` folder inside the container
ADD client/webpack.config.js /app/client
ADD client/.babelrc /app/client
ADD client/.eslintrc /app/client
ADD client/server.js /app/client
ADD client/src /app/client/src/
RUN echo `ls /app/client`
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]
