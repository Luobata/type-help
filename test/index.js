const assert = require('assert');
const {
    isNumber,
    isBoolean,
    isString,
    isObject,
    isArray,
    isNull,
    isUndefined,
    isNaN,
    isInfinity,
    isSymbol,
    isDate,
    isRegExp,
    isError,
    isHTMLElement,
    isHTMLElements,
} = require('../src/index');

describe('Test isNumber', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});
