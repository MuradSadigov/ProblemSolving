/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.split(" ").filter((str) => str.length != 0);

  return arr[arr.length - 1].length;
};
