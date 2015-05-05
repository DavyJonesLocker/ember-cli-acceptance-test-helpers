import Ember from 'ember';
import { findInputByLabel } from '../helpers/finders';

export function fillInByLabel(assert, context, label, inputValue) {
  const $label = findWithAssert(`label:contains('${label}')`);
  const input = findInputByLabel($label);

  fillIn(input, inputValue);
  triggerEvent(input, 'focusout');
}
