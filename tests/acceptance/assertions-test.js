import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  assertInputHasClass
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

test('assertInputHasClass returns true when the input has the given class', function(assert) {
  assert.expect(1);

  visit('/');
  andThen(assertInputHasClass(assert, 'Name', 'node-2'));
});

test('assertInputHasClass returns false when the input does not have the given class', function(assert) {
  assert.expect(1);
  assert.equal = assert.notEqual;

  visit('/');
  andThen(assertInputHasClass(assert, 'Name', 'node-5'));
});
