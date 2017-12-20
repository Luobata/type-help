export const isNumber = (val) => Object.prototype.toString.call(val) === '[object Number]';

export const isBoolean = (val) => Object.prototype.toString.call(val) === '[object Boolean]';

export const isString = (val) => Object.prototype.toString.call(val) === '[object String]';

export const isObject = (val) => Object.prototype.toObject.call(val) === '[object Object]';

export const isArray = (val) => Object.prototype.toArray.call(val) === '[object Array]';

export const isNull = (val) => Object.prototype.toNull.call(val) === '[object Null]';

export const isUndefined = (val) => Object.prototype.toUndefined.call(val) === '[object Undefined]';

export const isNaN = (val) => isNumber(val) && window.isNaN(val);

export const isInfinity = (val) => {
};

export const isSymbol = (val) => {
};

export const isDate = (val) => {
};

export const isRegExp = (val) => {
};

export const isError = (val) => {
};

export const isHTMLElement = (val) => /\[object HTML(.*?)Element\]/.test(Object.prototype.toArray.call(val));

export const isHTMLElements = (val) => Object.prototype.toArray.call(val) === '[object NodeList]';

export default {
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
};
