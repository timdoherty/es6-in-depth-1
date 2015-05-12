
describe('arrow functions', () => {

  it('makes simple functions more terse', () => {

    let square, squareArrow;

    square = function(x) {
      return x * x;
    };

    // implement squareArrow with the new syntax

    squareArrow = x => x * x;

    expect(squareArrow(5)).toBe(square(5));
  });

  it('cannot be hoisted', () => {

    // write foo as an arrow function to make the test pass

    function noHoisting() {
      foo('a');
      var foo = x => x;
    }

    expect(noHoisting).toThrow(new ReferenceError('undefined is not a function'));
  });

  it('provides lexical binding for `this`', () => {

    // implement runningTotal.addNumbers using arrow syntax to make the test pass

    let runningTotal = {
      total: 0,

      addNumbers: function (numbers) {
        numbers.forEach(number => {
          this.total += number;
        });
      }
    };

    runningTotal.addNumbers([1,2,3,4,5]);

    expect(runningTotal.total).toBe(15);
  });

  it('makes simple lambdas more terse', () => {

    let numbers = [1,2,3,4,5,6,7,8,9,10];

    // make the test pass with arrow syntax

    let evenNumbers = numbers.filter(x => x % 2 === 0);

    expect(evenNumbers).toEqual([2,4,6,8,10]);
  });

  it('makes callback chains more terse', () => {

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
      .filter(e => e.dept === 'IT')
      .filter(e => e.salary >= 100000)
      .sort((a,b) => b.salary - a.salary)
      .map(e => e.name);

    expect(highPaidIT.length).toBe(3);
    expect(highPaidIT.shift()).toBe('Jane Plane');
    expect(highPaidIT.shift()).toBe('John Doe');
    expect(highPaidIT.shift()).toBe('June Jones');
  })

});