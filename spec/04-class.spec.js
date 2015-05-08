/**
 * Created by dohertyt on 5/4/15.
 */

describe('class', () => {

  it('creates an instance from a constructor', () => {

    // write a class definition with a constructor that sets instance properties

    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    let person = new Person('Joe');
    expect(person.name).toBe('Joe');
  });

  it('has instance methods', () => {

    // add an instance method and make sure the class doesn't have that method

    class Person {
      constructor(name) {
        this.name = name;
      }
      speak() {
        return 'I am ' + this.name;
      }
    }

    let person = new Person('Joe');

    expect(person.name).toBe('Joe');
    expect(person.speak).toBeDefined();
    expect(Person.speak).toBeUndefined();
    expect(person.speak()).toBe('I am Joe');
  });

  it('has static methods', () => {

    // add a static method that creates new instances

    class Person {
      constructor(name) {
        this.name = name;
      }
      static create() {
        return new Person()
      }
    }

    let person = Person.create();

    expect(Person.create).toBeDefined();
    expect(person.create).toBeUndefined();
    expect(person instanceof Person).toBe(true);
  });

  it('has property getters / setters', () => {

    // add getter for name property
    // add setter that capitalizes name
    // ** note this is ES 5 object syntax

    class Person {
      constructor() {
      }

      get name() {
        return this._name;
      }

      set name(name) {
        this._name = name.toUpperCase();
      }
    }

    let person = new Person();
    expect(person.name).toBeUndefined();
    person.name = 'Joe';
    expect(person.name).toBe('JOE');

  });

  it('extends another class', () => {

    // create an employee class that extends person
    class Person {
      constructor(name) {
        this.name = name;
      }
    }

    class Employee extends Person {
      constructor(name) {
        super(name);
      }
    }

    let employee = new Employee('Joe');

    expect(employee.name).toBe('Joe');
    expect(employee instanceof Employee).toBe(true);
    expect(employee instanceof Person).toBe(true);
  });
});