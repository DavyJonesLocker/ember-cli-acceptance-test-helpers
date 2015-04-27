import Ember from 'ember';

export function findBySelector(app, selector, context = null) {
  let results;

  if (Ember.isNone(context)) {
    results = find(selector);
  } else {
    results = context.find(selector);
  }

  if (results.length == 1) {
    return results;
  } else if (results.length > 1) {
    throw `Multiple instances of ${selector} found.`;
  } else {
    throw `No instances of ${selector} found.`;
  }
}

Ember.Test.registerAsyncHelper('findBySelector', findBySelector);
