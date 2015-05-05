import Ember from 'ember';

export function assertValueEquals(assert, selector, expectedValue, context = null) {
  return function() {
    const value = find(selector, context).val();

    assert.equal(value, expectedValue);
  }
}

export function assertValueNotEqual(assert, selector, expectedValue, context = null) {
  return function() {
    const value = find(selector, context).val();

    assert.notEqual(value, expectedValue);
  }
}

export function assertCurrentUrl(assert, expectedUrl) {
  return function() {
    const currentUrl = currentURL();

    assert.equal(currentUrl, expectedUrl);
  };
}
