DB_NAME=arkadiko_api_development
DB_USER=arkadiko_api
DB_PASSWORD=arkadiko_api

db-run:
	@echo "Running database..."
	docker compose up -d postgres

db-init: db-run
	@echo "💁 Initializing database.."
	sleep 10
	make db-create
	make db-create-role
	make db-set-owner
	make db-seeds

db-create:
	@echo "💁 Creating database..."
	docker compose exec -u postgres postgres psql -c "CREATE DATABASE $(DB_NAME);"

db-create-role:
	@echo "💁 Creating role..."
	docker compose exec -u postgres postgres psql -c "CREATE ROLE $(DB_USER) WITH LOGIN PASSWORD '$(DB_PASSWORD)';"

db-set-owner:
	@echo "💁 Setting owner..."
	docker compose exec -u postgres postgres psql -c "ALTER DATABASE $(DB_NAME) OWNER TO $(DB_USER);"

db-seeds: app-run-migrations
	@echo "💁 Running seeds..."
	docker compose run -T --rm api rails console < db/seeds.rb

pg_data: db-run
	@echo "💁 pg_data persistent volume creation"

app-run-migrations: db-run
	@echo "💁 Running migrations..."
	# docker compose run --rm api rails db:create
	docker compose run --rm api rails db:migrate

app-run: db-run
	@echo "💁 Running API..."
	docker compose up -d api

app-stop:
	@echo "💁 Stopping API..."
	docker compose down api

app-restart:
	@echo "💁 Restarting API..."
	docker compose down api
	docker compose up -d api

logs:
	docker compose logs -f

purge:
	@echo "💁 Purging..."
	@echo "Are you sure? [y/N] " && read ans && [ $${ans:-N} = y ]
	docker compose down --volumes
	rm -rf pg_data || sudo rm -rf pg_data

PHONY: purge db-run db-create db-init db-create-role db-set-owner app-run-migrations app-run app-stop app-restart logs