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
    describe('number literal', function() {
        it('should return true with number literal', function() {
            assert.equal(isNumber(1), true);
        });
    });
    describe('number constructor', function() {
        it('should return true with number constructor(new Number(1))', function() {
            assert.equal(isNumber(new Number(1)), true);
        });
    });
    describe('NaN', function() {
        it('should return false with NaN', function() {
            assert.equal(isNumber(NaN), false);
        });
    });
    describe('Infinity', function() {
        it('should return false with Infinity', function() {
            assert.equal(isNumber(Infinity), false);
        });
    });

    describe('not Number', function() {
        it('should return false with not Number', function() {
            assert.equal(isNumber('Infinity'), false);
            assert.equal(isNumber(new String('Infinity')), false);
            assert.equal(isNumber({}), false);
            assert.equal(isNumber(new Object(true)), false);
        });
    });
});

describe('Test isInfinity', function() {
    describe('number literal', function() {
        it('should return false with number literal', function() {
            assert.equal(isInfinity(1), false);
        });
    });
    describe('number literal', function() {
        it('should return false with number constructor(new Number(1))', function() {
            assert.equal(isInfinity(new Number(1)), false);
        });
    });
    describe('NaN', function() {
        it('should return false with NaN', function() {
            assert.equal(isInfinity(NaN), false);
        });
    });
    describe('Infinity', function() {
        it('should return true with Infinity && -Infinity', function() {
            assert.equal(isInfinity(Infinity), true);
            assert.equal(isInfinity(-Infinity), true);
        });
    });
    describe('not Infinity', function() {
        it('should return false with not Infinity', function() {
            assert.equal(isInfinity('Infinity'), false);
            assert.equal(isInfinity(new String('Infinity')), false);
            assert.equal(isInfinity({}), false);
            assert.equal(isInfinity(new Object(true)), false);
        });
    });
});
