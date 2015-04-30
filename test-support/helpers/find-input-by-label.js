import Ember from 'ember';

export function findInputByLabel(app, label) {
  const { findWithAssert } = app.testHelpers;

  // return findWithAssert(`#${label.attr('for')}`);
  debugger
}

Ember.Test.registerAsyncHelper('findInputByLabel', findInputByLabel);
