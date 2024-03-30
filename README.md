# Strapi & Nuxt Setup

This project sets up a Strapi backend with a Nuxt frontend. Strapi is used to manage and serve content via a REST API. Nuxt is used to consume that content and render it on the frontend. The two are connected together to create a full stack application.

## 🧰 Makefile

The Makefile provides commands to manage the Docker environment:

- `make init` - Initialize the development environment by copying .env.example to .env and linking the local docker-compose file.
- `make init-prod` - Initialize the production environment by copying .env.example to .env and linking the production docker-compose file.
- `make up` - Start the Docker containers in the background.
- `make down` - Stop and remove the Docker containers.  
- `make build` - Build the Docker images without using cache.
- `make restart` - Restart the Docker containers.
- `make tail` - View and follow the container logs.