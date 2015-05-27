[![Build
Status](https://travis-ci.org/dockyard/ember-cli-acceptance-test-helpers.svg?branch=master)](https://travis-ci.org/dockyard/ember-cli-acceptance-test-helpers)

# ember-cli-acceptance-test-helpers
This Ember addon includes a set of declarative test helpers for acceptance testing.

## Installation
Install for [ember-cli](https://github.com/ember-cli/ember-cli):
`ember install ember-cli-acceptance-test-helpers`

## Helpers
### Actions
* `clickButton(buttonText)`
* `clickLink(linkText)`
* `fillInByLabel(label, value)`

### Assertions
* `assertCurrentUrl(assert, expectedUrl)`
* `assertInputHasClass(assert, label, klass)`
* `assertValueEqual(assert, label, value)`
* `assertValueNotEqual(assert, label, value)`

### Finders
* `findInputByLabel(label)`
* `findLabelByText(text)`
