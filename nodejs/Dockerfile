FROM node:10

WORKDIR /usr/data/nodejs

COPY app.js ./
COPY package.json ./
COPY package-lock.json ./

RUN npm i

EXPOSE 3000

CMD [ "node", "app.js" ]
