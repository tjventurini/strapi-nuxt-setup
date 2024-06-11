FROM node:20

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
RUN chown -R node:node /app
USER node
EXPOSE 3000