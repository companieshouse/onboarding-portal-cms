FROM strapi/base

WORKDIR /strapi-app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
