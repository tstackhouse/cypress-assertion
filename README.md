# Cypress Custom Assertion Failure

Reproduces a failure case when creating custom assertions for Cypress using the Chai TDD `assert` syntax.

This repo defines 2 tests, one using the `expect` syntax, and one using the `assert` syntax.

Running `npm test` will run cypress in headless mode and will always report one failing test case when the `assert` syntax is used.

Running `npm start` will run cypress in headed mode and on the first run, the same failure will be observed, however if the rerun tests button is clicked in the cypress UI, both test cases pass successfully. Refreshing the browser window will clear the browser state and rerun the tests, and again the first run will fail, but subsequent runs will pass.


## See
* https://github.com/cypress-io/cypress/discussions/16037
