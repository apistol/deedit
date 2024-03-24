FROM node:14 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli- .:/usr/src/app

COPY . .
CMD [ "npm", "start" ]


FROM node:alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --production

COPY --from=development /usr/src/appdist ./dist
CMD ["node", "dist/apps/reservations/main"]



