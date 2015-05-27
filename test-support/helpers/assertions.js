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

export function assertValueEqual(assert, label, value) {
  return function() {
    const labelForInput = findLabelByText(label);
    const actualValue = findInputByLabel(labelForInput).val();

    assert.equal(actualValue, value);
  }
}

export function assertValueNotEqual(assert, label, value) {
  return function() {
    const labelForInput = findLabelByText(label);
    const actualValue = findInputByLabel(labelForInput).val();

    assert.notEqual(actualValue, value);
  }
}
