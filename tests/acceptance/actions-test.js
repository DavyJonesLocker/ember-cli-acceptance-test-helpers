import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  assertHasMessage
} from '../helpers/test-assertions';

import {
  clickButton,
  clickLink,
  fillInByLabel
} from '../helpers/actions';

import {
  assertCurrentUrl,
  assertValueEquals,
  assertValueNotEqual
} from '../helpers/assertions';

let app;
const { run } = Ember;

module('Acceptance: Actions', {
  beforeEach() {
    app = startApp();
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('clickButton finds a button by its text and clicks it', function(assert) {
  assert.expect(2);

  visit('/');
  andThen(clickButton('First Target Button'));
  andThen(assertHasMessage(assert, 'First target button clicked'));
  andThen(clickButton('Second Target Button'));
  andThen(assertHasMessage(assert, 'Second target button clicked'));
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
  andThen(assertValueEquals(assert, 'Name', targetValue));
});
