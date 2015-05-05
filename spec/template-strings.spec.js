/**
 * Created by dohertyt on 5/5/15.
 */

describe('template strings', () => {

  it('interpolates values into a template string', () => {

    let name = 'Joe';
    let age = 49;

    // write a template string to make the test pass

    let myTemplateString = `My name is ${name} and I'm ${age} years old.`;

    expect(myTemplateString).toBe('My name is Joe and I\'m 49 years old.');
  });

  it('handles multi-line strings', () => {

    // how to test multi-line??
  });

  it('interpolates expressions into a template string', () => {

    let currentYear = 2015;
    let birthYear = 1970;

    // write a template string with expression to make the test pass

    let myTemplateString = `I am approximately ${currentYear - birthYear} years old.`;

    expect(myTemplateString).toBe('I am approximately 45 years old.');
  });

  it('modifies a the output with a tagged template string', () => {

    let amount = 5;
    let cost = 10;

    // build a tagged template string to format the numbers above as currency (USD)

    let formatCurrency = (strings, ...values) => {
      let result = '';
      values.forEach((value, index, array) => { array[index] = `$${value}.00` });

      for(let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
          result += values[i];
        }
      }
      return result;
    };

    expect(formatCurrency `It costs ${cost} but I only have ${amount}`).toBe('It costs $10.00 but I only have $5.00')
  });
});