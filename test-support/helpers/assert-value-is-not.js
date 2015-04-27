import Ember from 'ember';

export function assertValueIsNot(app, assert, context = null, selector, value) {
  const { findWithAssert } = app.testHelpers;
  const input = findBySelector(selector, context);

  assert.notEqual(input, value);
}

Ember.Test.registerAsyncHelper('assertValueIsNot', assertValueIsNot);
