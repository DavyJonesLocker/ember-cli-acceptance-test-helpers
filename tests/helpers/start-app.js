import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

// finders
import '../helpers/find-by-label';
import '../helpers/find-by-selector';
import '../helpers/find-input-by-label';

// actions
import '../helpers/fill-in-by-label';

// assertions
import '../helpers/assert-value';
import '../helpers/assert-value-is-not';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
