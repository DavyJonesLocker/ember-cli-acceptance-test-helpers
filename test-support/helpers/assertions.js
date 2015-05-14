import Ember from 'ember';

import {
  findInputByLabel,
  findLabelByText
} from '../helpers/finders';

export function assertCurrentUrl(assert, expectedUrl) {
  return function() {
    const currentUrl = currentURL();

    assert.equal(currentUrl, expectedUrl);
  };
}

export function assertInputHasClass(assert, label, klass) {
  return function() {
    const labelForInput = findLabelByText(label);
    const input = findInputByLabel(labelForInput);

    assert.equal(input.hasClass(klass), true, `${label} has class of ${klass}`);
  };
}

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
