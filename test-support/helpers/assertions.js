import Ember from 'ember';

export function assertValueIs(assert, context = null, selector, expectedValue) {
  const value = find(selector, context).val();
  assert.equal(value, expectedValue);
}

export function assertValueIsNot(assert, context = null, selector, expectedValue) {
  const value = find(selector, context).val();
  assert.notEqual(value, expectedValue);
}
