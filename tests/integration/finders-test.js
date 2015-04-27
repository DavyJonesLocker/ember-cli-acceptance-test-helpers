import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';
import acceptanceTestHelpers from '../helpers/finders';

let app;
let { run } = Ember;
let {
  findInput
} = acceptanceTestHelpers;

module('Integration: Finders', {
  beforeEach() {
    app = startApp();
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('findInput finds the specified input', function(assert) {
  visit('/');
  findInput('name');
});
