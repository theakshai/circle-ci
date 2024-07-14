FROM node:slim

WORKDIR /src

COPY . .

RUN npm install

CMD ['node', 'index.js']

EXPOSE 8080
