import Ember from 'ember';

export function findByLabel(app, assert, label) {
  const { findWithAssert } = app.testHelpers;

  return find('label', label);
}

Ember.Test.registerAsyncHelper('findByLabel', findByLabel);
