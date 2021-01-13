FROM node:12.8.0 as builder
WORKDIR /app

COPY package.json .
RUN npm install yarn  -g
RUN yarn
COPY . .

CMD ["yarn", "server"]