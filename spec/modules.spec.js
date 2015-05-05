/**
 * Created by dohertyt on 5/4/15.
 */

import foo from '../components/foo';
import {bar} from '../components/foo';

describe('modules', () => {

  it('can import the default module value', () => {
    expect(foo.bar).toBeDefined();
    expect(foo.baz).toBeDefined();
  });

  it('can import a single module member', () => {
    expect(typeof bar).toBe('function');
  })
});