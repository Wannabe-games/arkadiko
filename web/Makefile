BACKEND_URL = http://api:3000

PHONY: build-image yarn_install run_dev stop purge logs

build-image:
	@echo "Building image..."
	docker compose build

yarn_install: build-image
	@echo "Installing dependencies..."
	docker compose run --rm web yarn install

run_dev: .env yarn_install
	@echo "Running development server..."
	docker compose up -d

# if .env file is not present, copy the example file
.env:
	cp .env.testnet .env

stop:
	@echo "Stopping development server..."
	docker compose down

logs:
  @echo "Showing logs..."
  docker compose logs -f

purge:
	@echo "Purging..."
	rm .env
