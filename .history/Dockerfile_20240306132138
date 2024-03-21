FROM node:alpine3.11

WORKDIR /containerFolder/app

COPY package*.json .

COPY app.js .

RUN npm install

EXPOSE 5000

CMD [ "npm","run","dev" ]