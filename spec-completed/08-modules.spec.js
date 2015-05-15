
// add imports from /components/foo.js here to make the tests pass

import foo from '../components/foo';
import myFoo  from '../components/foo';
import { bar } from '../components/foo';
import { bar as myBar, baz as myBaz } from '../components/foo';

describe('modules', () => {

  it('can import the default module value', () => {
    expect(foo.bar).toBeDefined();
    expect(foo.baz).toBeDefined();
  });

  it('can import a single module member', () => {
    expect(typeof bar).toBe('function');
  });

  it('can alias imported modules', () => {

    expect(myFoo).toBeDefined();
    expect(myFoo.bar).toEqual(foo.bar);
    expect(myFoo.baz).toEqual(foo.baz);
  });

  it('can destructure an import', () => {

    expect(myBar).toBeDefined();
    expect(myBar).toEqual(foo.bar);
    expect(myBaz).toBeDefined();
    expect(myBaz).toEqual(foo.baz);
  });
});