FROM node:20-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
# COPY ./package.json ./package-lock.json ./
COPY . .
RUN npm install

# COPY . .

RUN chown -R node:node /app
USER node
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
