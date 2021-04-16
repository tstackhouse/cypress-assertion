// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

const isFoo = (_chai, utils) => {
  function assertIsFoo(options) {
    this.assert(
      this._obj === "foo",
      'expected #{this} to be string "foo"',
      'expected #{this} to not be string "foo"',
      this._obj
    );
  }

  _chai.Assertion.addMethod("foo", assertIsFoo);

  _chai.assert.isFoo = function (exp, act, parent) {
    new _chai.Assertion(exp).to.be.foo(act, parent);
  };
};

// registers our assertion function "isFoo" with Chai
chai.use(isFoo);
