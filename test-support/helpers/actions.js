import Ember from 'ember';
import {
  findInputByLabel,
  findLabelByText
} from '../helpers/finders';

export function clickLink(linkText) {
  return function() {
    const linkSelector = `a:contains('${linkText}')`;

    click(linkSelector);
  };
}

export function fillInByLabel(label, value) {
  return function() {
    const labelForInput = findLabelByText(label);
    const input = findInputByLabel(labelForInput);

    fillIn(input, value);
    return find(input).focusout();
  };
}
