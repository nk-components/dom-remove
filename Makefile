
build: component.json index.js
	@./node_modules/component/bin/component-build --dev

test: build
	@./node_modules/component-test/bin/component-test phantom

watch: build
	@./node_modules/rewatch/bin/rewatch **/*.js -c "make test"

clean:
	rm -fr build components

.PHONY: clean test build
