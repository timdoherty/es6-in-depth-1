
describe('let', () => {

  xit('can be assigned like var', () => {

    // make the test pass with let

    var foo = 'bar';

    foo = 'baz';

    expect(foo).toBe('baz');
  });

  xit('does not hoist let like var', () => {

    // make the test pass with let

    function noHoisting() {
      console.log(foo);
      {
        var foo = 'bar';
      }
    }

    expect(noHoisting).toThrow(new ReferenceError('foo is not defined'));
  });

  xit('avoids closure gotcha in loops', () => {

    let funcs = [];

    // make the test pass with let

    for (var i = 0; i < 10; i++) {
      funcs.push(() => i);
    }

    expect(funcs[3]()).toBe(3);
  });

  xit('has block level scoping with let', () => {

    // make the test pass with let

    var foo = 'bar';

    {
      var foo = 'baz';
      expect(foo).toBe('baz');
    }

    expect(foo).toBe('bar');
  });
});

describe('const', () => {

  xit('only restricts array variable assignment, not values', () => {

    // make the test pass with const

    var myArray = [1, 2, 3];

    myArray.push(4, 5);

    expect(myArray).toEqual([1, 2, 3 ,4, 5]);
  });

  xit('only restricts object variable assignment, not values', () => {

    // make the test pass with const

    var myObj = { a: 1, b: 2, c: 3 };
    myObj.a = 4;

    expect(myObj).toEqual({ a: 4, b: 2, c: 3});
  });

});