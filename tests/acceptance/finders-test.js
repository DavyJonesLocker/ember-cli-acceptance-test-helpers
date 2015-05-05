import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  findInputByLabel,
  findLabelByText
} from '../helpers/finders';
import {
  assertValueEqual,
  assertValueNotEqual
} from '../helpers/assertions';

let app;
let { run } = Ember;

module('Integration: Finders', {
  beforeEach() {
    app = startApp();
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('findInputByLabel finds the input by the label text', function(assert) {
  let form = find('form.node-4');
  let label;
  let input;

  assert.expect(1);

  visit('/');
  andThen(function() {
    label = findLabelByText('Name');
    input = findInputByLabel(label);
    assert.equal('John Doe', input.val(), 'expected John Doe to be the input value');
  });
});
