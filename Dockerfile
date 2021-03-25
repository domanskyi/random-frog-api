FROM node:14

WORKDIR /usr/src/random-frog-api

COPY . .

RUN npm ci --only=production

EXPOSE 8080

CMD ["npm", "start"]