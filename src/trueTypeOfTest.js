const trueTypeOf = require('./trueTypeOf');

describe('trueTypeOf', () => {

  it('should properly describe objects of different types', () => {
    expect(trueTypeOf([])).toBe('array');
    expect(trueTypeOf({})).toBe('object');
    expect(trueTypeOf(123)).toBe('number');
    expect(trueTypeOf('asdf')).toBe('string');
    expect(trueTypeOf(/a/)).toBe('regexp');
  });

});
