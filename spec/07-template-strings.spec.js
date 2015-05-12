
describe('template strings', () => {

  xit('interpolates values into a template string', () => {

    let name = 'Joe';
    let age = 49;

    // write a template string to make the test pass

    expect(myTemplateString).toBe('My name is Joe and I\'m 49 years old.');
  });

  it('handles multi-line strings', () => {

    // TODO how to test multiline
    // make the test pass with a multi-line template string

    let multi = () => {
      let myMulti = `this is a
        mutiline string
        for demonstration`;
    };

    expect(multi).not.toThrow();
  });

  xit('interpolates expressions into a template string', () => {

    let currentYear = 2015;
    let birthYear = 1970;

    // write a template string to make the test pass

    expect(myTemplateString).toBe('I am approximately 45 years old.');
  });

  it('modifies a the output with a tagged template string', () => {

    let amount = 5;
    let cost = 10;

    // write a tag function to make the test pass

    expect(formatCurrency `It costs ${cost} but I only have ${amount}`).toBe('It costs $10.00 but I only have $5.00')
  });
});