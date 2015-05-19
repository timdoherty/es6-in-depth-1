
describe('class', () => {

  xit('creates an instance from a constructor', () => {

    // write a class definition with a constructor that sets instance properties

    let person = new Person('Joe');
    expect(person.name).toBe('Joe');
  });

  xit('has instance methods', () => {

    // add an instance method and make sure the class doesn't have that method

    let person = new Person('Joe');

    expect(person.name).toBe('Joe');
    expect(person.speak).toBeDefined();
    expect(Person.speak).toBeUndefined();
    expect(person.speak()).toBe('I am Joe');
  });

  xit('has static methods', () => {

    // add a static method that creates new instances

    let person = Person.create();

    expect(Person.create).toBeDefined();
    expect(person.create).toBeUndefined();
    expect(person instanceof Person).toBe(true);
  });

  xit('has property getters / setters', () => {

    // add getter for name property
    // add setter that capitalizes name
    // ** note this is ES 5 object syntax

    let person = new Person();
    expect(person.name).toBeUndefined();
    person.name = 'Joe';
    expect(person.name).toBe('JOE');

  });

  xit('extends another class', () => {

    // create an employee class that extends person

    let employee = new Employee('Joe');

    expect(employee.name).toBe('Joe');
    expect(employee instanceof Employee).toBe(true);
    expect(employee instanceof Person).toBe(true);
  });
});