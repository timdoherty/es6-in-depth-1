
describe('enhanced object literal syntax', () => {

  xit('has shorthand property names', () => {

    let name = 'Joe';
    let age = 49;

    // use property shorthand to make the tests pass

    expect(person.name).toBe('Joe');
    expect(person.age).toBe(49);

  });

  xit('has computed properties', () => {

    // add a computed property 'b' + 'ar' to make the tests pass

    let thing = {
      foo: 'bar'
    };

    expect(thing.foo).toBe('bar');
    expect(thing.bar).toBe('baz');
  });

  xit('has improved method syntax', () => {

    // use new method syntax to make the test pass

    let name = 'Joe';
    let age = 49;

    expect(person.speak()).toBe('I am Joe and I am 49 years old.');
  })
});