import Ember from 'ember';

export function findByLabel(assert, label) {
  return findWithAssert('label', label);
}

export function findBySelector(selector, context = null) {
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

export function findInputByLabel(label) {
  return findWithAssert(`#${label.attr('for')}`);
}
