# UXcaptain server

# Description

This is a template for an Express.js application. It includes a basic setup for a REST API with a user model and authentication.

This template uses .ejs for the front end

# Features

- Analytics (Posthog)
- User Authentication (PassportJS)
- Database (PostgreSQL)
- Payments (Stripe)
- Logging (Pinojs)

# Code stuff

- testing - Playwright?


# Analytics

Product Analytics

- Front end
 - Posthog
 - Google Analytics
 - Google Tag Manager
 - Openreplay

- Back end
    - Posthog

# Logging & Visualizing logs

Logging is done with [Telegram](https://telegram.com)

Visualizing logs is done in telegram chat

# Deployment

- Recomended is Koyeb - Has a free instance

# Database

PostgreSQL

# Build & Deployment

## Docker

The web app is contained and can be built from a Docker image and hosting it in [Docker Hub](https://hub.docker.com/repository/docker/sergion14/uxcaptain/general)

## Local deployments

The server can be run either via:

- Docker compose config from the server directory
- Standalone app via own npm command

- `npm run start:local` Will start the nodejs server outside of docker using the `.env` file

- `npm run start:docker` will run `Docker compose` using the  command and spawn the server + associated services (eg: Database) using the `compose.yaml` file

Docker compose is configured so the server will auto rebuild on code changes, so there is no need to close and reopen the server manually

**NOTE:**
Currently the web app is not included in compose, so the front end has to be spawned from its own repository

## LATEST & NEXT deployments

Deployments are triggered by pushing or merging to `next` and `latest` branches.

When new code is pushed to either branch, Github Actions will:

- Build a the Docker image for the LATEST branch
- Upload the build image to Docker Hub
- Create or update the secrets in [Koyeb](https://koyeb.com) using Github Secrets
- Run & deploy the Docker image in [Koyeb](https://koyeb.com)'s Infrastructure

[Koyeb](https://koyeb.com) - easy to configure & serverless infrastructure running on AWS under the hood

### Making the server available publicly

The publicly available branches - `next` & `latest` - are served using [ExpressJS](https://expressjs.com/)

### Environmental Variables

Environmental variables are injected at runtime by [Koyeb](https://koyeb.com), and they are set per-service (eg: `next`, `latest`) in [Koyeb Project Configuration Environmental Variables configuration](https://app.koyeb.com/services/8a026356-e93c-4908-8757-7a2462d8f0e6/settings)

Direct access to services in Koyeb:

- [latest]()
- [next](https://app.koyeb.com/services/001b2ced-2b56-4170-a7f2-fc990546f7b8?deploymentId=80bd9e5b-ffd0-48ce-83c4-779c0e38c6f7)

An example list of env variables can be found in `.env.example` in the root directory


# Stripe - Payment provider 

Stripe client for debugging can be started with `npm` command `npm run stripe:listen`


# API documentation

All the up-to-date documentation can be found in the `swagger.yaml` file


# AWS Permissions

- All permissions are strict and handled via users and groups in [AWS IAM Console](https://us-east-1.console.aws.amazon.com/iam/home)