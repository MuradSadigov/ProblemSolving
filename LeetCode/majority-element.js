/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let occurrence = {};
  nums.forEach((elem) => {
    if (!occurrence[elem]) {
      occurrence[elem] = 0;
    }

    occurrence[elem]++;
  });
  let maxValue = -Infinity;
  let maxKey;

  for (let [key, value] of Object.entries(occurrence)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
};
