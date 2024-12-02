front-up:
	make -C web run_dev

backend-up:
	make -C api app-run

apps-down:
	make -C api app-stop
	make -C web stop

purge:
	make -C api purge
	make -C web purge