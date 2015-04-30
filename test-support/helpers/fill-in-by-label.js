import Ember from 'ember';

export function fillInByLabel(app, assert, context, label, inputValue) {
  const {
    findInputByLabel,
    findByLabel,
    fillIn,
    triggerEvent
  } = app.testHelpers;

  const $label = findBySelector(`label:contains('${label}')`, context);
  const $input = findInputByLabel($label);

  fillIn($input, inputValue);
  triggerEvent($input, 'focusout');
}

Ember.Test.registerAsyncHelper('fillInByLabel', fillInByLabel);
