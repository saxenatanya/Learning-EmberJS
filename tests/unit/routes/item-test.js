import { module, test } from 'qunit';
import { setupTest } from 'learning-ember-js/tests/helpers';

module('Unit | Route | item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:item');
    assert.ok(route);
  });
});
