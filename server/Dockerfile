FROM node:12.8.0 as builder
WORKDIR /app

RUN npm install yarn -g
COPY server/package.json .
RUN yarn install
COPY ./server .

CMD ["yarn", "run", "server"]