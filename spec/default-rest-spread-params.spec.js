/**
 * Created by dohertyt on 5/5/15.
 */

describe('default parameters', () => {

  it('should have a default parameter value', () => {

    let myFunc = (param='foo') => {
      return param;
    };

    expect(myFunc('bar')).toBe('bar');
    expect(myFunc()).toBe('foo');
  });

  // default objects
});

describe('rest parameters', () => {

  it('should have a variable number of arguments', () => {

    let myFunc = (...rest) => {
      return rest;
    };

    expect(myFunc(1,2,3).length).toBe(3);
    expect(myFunc().length).toBe(0);
  });
});

describe('spread operator', () => {

});