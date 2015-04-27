import Ember from 'ember';

export function assertValue(app, assert, selector, expectedValue) {
  const { input } = app.testHelpers;
  const inputValue = find(selector).val();

  assert.equal(inputValue, expectedValue);
}

Ember.Test.registerAsyncHelper('assertValue', assertValue);
