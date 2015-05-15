
describe('template strings', () => {

  it('interpolates values into a template string', () => {

    let name = 'Joe';
    let age = 49;

    // write a template string to make the test pass

    let myTemplateString = `My name is ${name} and I'm ${age} years old.`;

    expect(myTemplateString).toBe('My name is Joe and I\'m 49 years old.');
  });

  it('interpolates expressions into a template string', () => {

    let currentYear = 2015;
    let birthYear = 1995;

    // write a template string to make the test pass

    let myTemplateString = `JavaScript is ${currentYear - birthYear} years old.`;

    expect(myTemplateString).toBe('JavaScript is 20 years old.');
  });

  it('modifies the output with a tagged template string', () => {

    let amount = 5;
    let cost = 10;

    // write a tag function to make the test pass

    let formatCurrency = (strings, ...values) => {
      return strings.reduce(function (prev, cur, idx) {
        if (idx > 0) {
          prev += `$${values[idx-1]}.00`;
        }
        return prev + cur;
      }, '');
    };

    expect(formatCurrency `It costs ${cost} but I only have ${amount}`).toBe('It costs $10.00 but I only have $5.00')
  });
});