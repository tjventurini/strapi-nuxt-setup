init:
	cp -n .env.example .env
	ln -sf ./docker/docker-compose.local.yml docker-compose.yml

init-prod:
	cp -n .env.example .env
	ln -sf ./docker/docker-compose.prod.yml docker-compose.yml

up:
	docker compose up -d
start: up

down:
	docker compose down --remove-orphans
stop: down

tail:
	docker compose logs -f

build:
	docker compose build --no-cache

restart: down up

clear:
	rm .env
	rm docker-compose.yml

ps:
	docker compose ps

login-nuxt:
	docker compose exec nuxt sh
