import Ember from 'ember';

export function fillInByLabel(app, assert, context, label, inputValue) {
  const {
    findInputByLabel,
    findByLabel,
    fillIn,
    triggerEvent
  } = app.testHelpers;

  const $label = find(`label:contains('${label}')`);
  const input = findInputByLabel($label);

  fillIn(input, inputValue);
  triggerEvent(input, 'focusout');
}

Ember.Test.registerAsyncHelper('fillInByLabel', fillInByLabel);
