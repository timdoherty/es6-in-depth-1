
// add imports from /components/foo.js here to make the tests pass

describe('modules', () => {

  xit('can import the default module value', () => {
    expect(foo.bar).toBeDefined();
    expect(foo.baz).toBeDefined();
  });

  xit('can import a single module member', () => {
    expect(typeof bar).toBe('function');
  });

  xit('can alias imported modules', () => {

    expect(myFoo).toBeDefined();
    expect(myFoo.bar).toEqual(foo.bar);
    expect(myFoo.baz).toEqual(foo.baz);
  });

  xit('can destructure an import', () => {

    expect(myBar).toBeDefined();
    expect(myBar).toEqual(foo.bar);
    expect(myBaz).toBeDefined();
    expect(myBaz).toEqual(foo.baz);
  });
});