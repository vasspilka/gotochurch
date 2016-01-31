from node:5.5-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 8080

CMD [ "node", "server.js"]
