const convertToRoman = require('../convertToRoman');
const assert = require('assert');

describe('Number to roman converter', function () {
  it('converts 5 to V ', function () {
    assert.strictEqual(convertToRoman.convert(5), 'V');
  });

  it('converts 86 to LXXXVI ', function () {
    assert.strictEqual(convertToRoman.convert(86), 'LXXXVI');
  });

  it('converts 739 to DCCXXXIX ', function () {
    assert.strictEqual(convertToRoman.convert(739), 'DCCXXXIX');
  });

  it('converts 1504 to MDIV ', function () {
    assert.strictEqual(convertToRoman.convert(1504), 'MDIV');
  });

  it('converts 3999 to MMMCMXCIX ', function () {
    assert.strictEqual(convertToRoman.convert(3999), 'MMMCMXCIX');
  });
});
