
describe('default parameters', () => {

  it('should have a default parameter value', () => {

    // write a function myFunc with a default parameter to make the tests pass

    let myFunc = (param='foo') => param;

    expect(myFunc('bar')).toBe('bar');
    expect(myFunc(undefined)).toBe('foo');
    expect(myFunc(null)).toBe(null);
    expect(myFunc()).toBe('foo');
  });

  it ('should not appear in arguments', () => {

    // write a function myFunc that returns the length of the arguments object

    let myFunc = function(param='foo')  {
      return arguments.length;
    };

    expect(myFunc('bar')).toBe(1);
    expect(myFunc(null)).toBe(1);
    expect(myFunc()).toBe(0);

  });

  it('takes an object as default', () => {

    // add default param(s) to make the test pass

    let myFunc = function ({param1='foo', param2='bar'}={}) {
      expect(param1).toBeDefined();
      expect(param2).toBeDefined();
    };

    myFunc({param1: 'fee', param2: 'fie'});
    myFunc({param1: 'fee'});
    myFunc();
  });

  it('can take a function as default', () => {

    // write a function myFunc that has a default function parameter

    let myFunc = (cb = () => 'hello world!') => {
      return cb();
    };

    let myCb = () => 'foo';

    expect(myFunc(myCb)).toBe('foo');
    expect(myFunc()).toBe('hello world!');
  });

});

describe('rest parameters', () => {

  it('should have a variable number of unspecified arguments', () => {

    // write a function myFunc with a combination of named and rest parameters

    let myFunc = (arg1, arg2, ...rest) => {
      return rest;
    };

    expect(myFunc().length).toBe(0);
    expect(myFunc(1).length).toBe(0);
    expect(myFunc(1,2).length).toBe(0);
    expect(myFunc(1,2,3).length).toBe(1);
    expect(myFunc(1,2,3,4).length).toBe(2);
  });

  it('is a proper array vs the arguments object', () => {

    // write two functions myFunc and myFunc2 to make the tests pass

    let myFunc = function () {
      return arguments;
    };

    let myFunc2 = (...rest) => rest;

    let args = myFunc(1, 2, 3);
    let restParams = myFunc2(1, 2, 3);

    expect(args.__proto__).toNotBe(restParams.__proto__);
    expect(restParams.__proto__).toBe(Array.prototype);
    expect(args.__proto__).toBe(Object.prototype);
    expect(args.slice).toBeUndefined();
    expect(restParams.slice).toBeDefined();
  });

});

describe('spread operator', () => {

  it('declaratively splices two arrays', () => {
    let array1 = [3, 4, 5];

    // use the spread operator to declare array2 such that the test passes

    let array2 = [1, 2, ...array1, 6, 7, 8, 9, 10];

    expect(array2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('makes for a cleaner array.push',() => {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    // use the spread operator to push array2's elements into array1

    array1.push(...array2);

    expect(array1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('can replace function.apply for argument arrays', () => {

    let myFunc = (x, y, z) => x + y + z;
    let args = [1, 2, 3];

    // implement funcApply to make the test pass

    function funcApply(argsArray) {
      return myFunc(...argsArray);
    }

    expect(funcApply(args)).toBe(6);
  });

  it('can emulate function.apply for constructors', () => {

    let dateParts = [1995, 12, 1];

    // implement dateApply to make the test pass

    function dateApply(parts) {
      return new Date(...parts)
    }

    expect(dateApply(dateParts)).toEqual(new Date(1995, 12, 1));
  });
});