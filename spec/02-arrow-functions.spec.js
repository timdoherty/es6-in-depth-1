
describe('arrow functions', () => {

  xit('makes simple functions more terse', () => {

    let square, squareArrow;

    square = function(x) {
      return x * x;
    };

    // implement squareArrow with the new arrow syntax

    expect(squareArrow(5)).toBe(square(5));
  });

  xit('cannot be hoisted', () => {

    // write foo as an arrow function to make the test pass

    function noHoisting() {
      foo('a');

      function foo (x) {
        return x;
      }
    }

    expect(noHoisting).toThrow(new ReferenceError('undefined is not a function'));
  });

  xit('provides lexical binding for `this`', () => {

    // implement runningTotal.addNumbers using arrow syntax to make the test pass

    let runningTotal = {
      total: 0,

      addNumbers: function (numbers) {
        numbers.forEach(function (number) {
          this.total += number
        });
      }
    };

    runningTotal.addNumbers([1,2,3,4,5]);
    expect(runningTotal.total).toBe(15);
  });

  xit('makes simple lambdas more terse', () => {

    let numbers = [1,2,3,4,5,6,7,8,9,10];

    // make the test pass with arrow syntax

    let evenNumbers = numbers.filter(function (x) {
      return x % 2 === 0;
    });

    expect(evenNumbers).toEqual([2,4,6,8,10]);
  });

  xit('makes callback chains more terse', () => {

    let employees = [
      { name: 'John Doe', dept: 'IT', salary: 150000 },
      { name: 'Jane Plane', dept: 'IT', salary: 165000 },
      { name: 'Joe Schmoe', dept: 'Accounting', salary: 45000 },
      { name: 'Jim Smith', dept: 'IT', salary: 55000 },
      { name: 'Sue Blue', dept: 'Finance', tenure: 70000 },
      { name: 'June Jones', dept: 'IT', salary: 125000 }
    ];

    // rewrite the callback chain and make the tests pass with arrow functions

    let highPaidIT = employees
      .filter(function (e) {
        return e.dept === 'IT';
      })
      .filter(function (e) {
        return e.salary >= 100000;
      })
      .sort(function (a,b) {
        return b.salary - a.salary;
      })
      .map(function (e) {
        return e.name;
      });

    expect(highPaidIT.length).toBe(3);
    expect(highPaidIT.shift()).toBe('Jane Plane');
    expect(highPaidIT.shift()).toBe('John Doe');
    expect(highPaidIT.shift()).toBe('June Jones');
  })

});