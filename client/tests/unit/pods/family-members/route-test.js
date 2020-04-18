import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | family-members', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:family-members');
    assert.ok(route);
  });
});
