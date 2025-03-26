# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.14.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY prisma ./prisma/

RUN --mount=type=cache,target=/root/.npm npx prisma generate

COPY . .

COPY startLocal.sh .
RUN chmod +x startLocal.sh

USER node

EXPOSE 3000

CMD ["./startLocal.sh"]
