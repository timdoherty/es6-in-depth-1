
describe('destructuring assignment with arrays', () => {

  xit('provides terse syntax for assigning variables from an array', () => {

    // make the tests pass with an array [1, 2, 3]

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  xit('can skip array elements', () => {

    // make the tests pass by skipping an element in array [1, 2, 3]

    expect(a).toBe(1);
    expect(c).toBe(3);
  });

  xit('can pull elements from nested arrays', () => {

    // make the tests pass with a nested array [1, 2, [3, 4, [5, 6]]]

    expect(a).toBe(1);
    expect(c).toBe(3);
    expect(f).toBe(6);
  });

  xit('can swap variables', () => {

    let a = 1, b = 2;

    // use destructuring to swap the variables

    expect(a).toBe(2);
    expect(b).toBe(1);
  });

  xit('can destructure regular expression matches', () => {

    let url = 'http://www.timdoherty.net/search/label/JavaScript';

    let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

    // destructure the parsedURL array to make the tests pass

    expect(scheme).toBe('http');
    expect(host).toBe('www.timdoherty.net');
    expect(path).toBe('search/label/JavaScript');
  })

});

describe('destructuring assignment with objects', () => {

  xit('provides terse syntax for assigning same-name variables from an object\'s properties', () => {

    // make the tests pass with an object  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

    expect(a).toBe(1);
    expect(c).toBe(3);
    expect(f).toBe(6);
  });

  xit('uses source: target for aliased variables', () => {

    // make the tests pass with an object { a: 1, b: 2, c: 3 };

    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });

  xit('can destructure nested properties', () => {

    let shape = {
      type: 'rectangle',
      dimensions: {
        length: 10,
        width: 15
      }
    };

    // make the tests pass by destructuring nested properties

    expect(length).toBe(10);
    expect(width).toBe(15);
  });

});