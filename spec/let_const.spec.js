/**
 * Created by dohertyt on 5/4/15.
 */

'use strict';

describe('let', () => {

  it('should prevent hoisting of variables with let', () => {

    //Change loop counter to `let` so that it is trapped inside of the loop, and can't be returned.
    for (let i = 0; i < 10; i++) { }

    expect(() => console.log(i)).toThrow(new ReferenceError('i is not defined'));
  });

  it('can be assigned like var', () => {

    let foo = 'bar';

    foo = 'baz';

    expect(foo).toBe('baz');
  });

  it('doesn\'t hoist let like var', () => {

    function noHoisting() {
      console.log(foo);
      {
        let foo = 'bar';
      }
    }

    expect(noHoisting).toThrow(new ReferenceError('foo is not defined'));
  });

  it('should have block level scoping with let', () => {
    let foo = 'bar';

    {
      let foo = 'baz';
    }

    expect(foo).toEqual('bar');
  });
});

//describe('const', () => {
//
//  xit('should emulate an immutable constant', () => {
//    const myConst = 'FOOBAR';
//
//    try {
//      myConst = 'BARBAZ';
//    } catch (e) {
//
//    }
//
//    expect(myConst).toBe('BARBAZ');
//  });
//
//});