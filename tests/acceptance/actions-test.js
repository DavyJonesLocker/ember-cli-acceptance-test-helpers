import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  clickLink,
  fillInByLabel
} from '../helpers/actions';

import {
  assertCurrentUrl,
  assertValueEquals,
  assertValueNotEqual,
} from '../helpers/assertions';

let app;
let { run } = Ember;

module('Acceptance: Actions', {
  beforeEach() {
    app = startApp();
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('clickLink finds a link by its text and clicks it', function(assert) {
  assert.expect(1);

  visit('/');
  andThen(clickLink('First link'));
  andThen(assertCurrentUrl(assert, '/first-link-target'));
});

test('fillInByLabel enters text into an input corresponding to a label', function(assert) {
  const targetInput = 'form input.node-2';
  const targetValue = 'Jane Doe';

  assert.expect(2);

  visit('/');
  andThen(assertValueNotEqual(assert, targetInput, targetValue)); // sanity check
  andThen(fillInByLabel('Name', targetValue));
  andThen(assertValueEquals(assert, targetInput, targetValue));
});
