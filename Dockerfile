FROM node:14-alpine

WORKDIR /usr/src/random-frog-api

COPY . .

RUN npm ci --only=production

EXPOSE 8080

USER node

CMD ["npm", "start"]