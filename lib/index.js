"use strict";

function maxMin(k, arr) {
  let minimumUnfairness = Number.MAX_VALUE;

  arr.sort((x, y) => x - y);

  for (let index = 0; index <= arr.length - k; index++) {
    let unfairness = arr[index + k - 1] - arr[index];
    if (unfairness < minimumUnfairness) {
      minimumUnfairness = unfairness;
    }
  }

  return minimumUnfairness;
}

module.exports = maxMin;
