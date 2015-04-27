import Ember from 'ember';

export function findInputByLabel(app, label) {
  const { findWithAssert } = app.testHelpers;

  return findWithAssert(`#${label.attr('for')}`);
}

Ember.Test.registerHelper('findInputByLabel', findInputByLabel);
