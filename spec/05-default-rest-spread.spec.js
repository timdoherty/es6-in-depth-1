/**
 * Created by dohertyt on 5/5/15.
 */

describe('default parameters', () => {

  it('should have a default parameter value', () => {

    let myFunc = (param='foo') => param;

    expect(myFunc('bar')).toBe('bar');
    expect(myFunc(undefined)).toBe('foo');
    expect(myFunc(null)).toBe(null);
    expect(myFunc()).toBe('foo');
  });

  it ('should not appear in arguments', () => {

    let myFunc = function(param='foo')  {
      return arguments.length;
    };

    expect(myFunc('bar')).toBe(1);
    expect(myFunc(null)).toBe(1);
    expect(myFunc()).toBe(0);

  });

  it('takes an object as default', () => {

    let myFunc = function ({param1='foo', param2='bar'}={}) {
      expect(param1).toBeDefined();
      expect(param2).toBeDefined();
    };

    myFunc({param1: 'fee', param2: 'fie'});
    myFunc({param1: 'fee'});
    myFunc();
  });

  // TODO function param?
});

describe('rest parameters', () => {

  it('should have a variable number of unspecified arguments', () => {

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
    let array2 = [1, 2, ...array1, 6, 7, 8, 9, 10];

    expect(array2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('makes for a cleaner array.push',() => {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];

    array1.push(...array2);

    expect(array1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('can replace function.apply for argument arrays', () => {

    let myFunc = (x, y, z) => x + y + z;
    let args = [1, 2, 3];

    expect(myFunc(...args)).toBe(6);
  });

  it('can emulate function.apply for constructors', () => {

    let dateParts = [1995, 12, 1];

    expect(new Date(...dateParts)).toEqual(new Date(1995, 12, 1));
  });
});