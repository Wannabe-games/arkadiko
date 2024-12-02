BACKEND_URL = http://api:3000

PHONY: build-image yarn_install run_dev stop purge

build-image:
	@echo "Building image..."
	docker compose build

yarn_install: build-image
	@echo "Installing dependencies..."
	docker compose run --rm web yarn install

run_dev: .env yarn_install
	@echo "Running development server..."
	docker compose up

# if .env file is not present, copy the example file
.env:
	cp .env.testnet .env

stop:
	@echo "Stopping development server..."
	docker compose down

purge:
	@echo "Purging..."
	rm .env