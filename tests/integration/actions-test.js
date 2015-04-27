import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

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

test('fillInByLabel enters text into an input corresponding to a label', function(assert) {
  function withinForm(text, callback) {
    const form = findBySelector(`form:contains('${text}')`);
    form.then(callback);
  }

  const targetInput = 'input#name';
  const targetValue = 'Jane Doe';

  assert.expect(2);

  visit('/');
  andThen(function() {
    withinForm('John Doe', function(context) {
      assertValueIsNot(assert, context, targetInput, targetValue); // sanity check
      fillInByLabel(assert, context, 'Name', targetValue);
      assertValue(assert, targetInput, targetValue);
    });
  });
});
