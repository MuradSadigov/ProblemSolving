/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0
    }

    if (typeof obj == 'object' && !Array.isArray(obj)) {
        return Object.keys(obj).length === 0;
    }

    return false;
};