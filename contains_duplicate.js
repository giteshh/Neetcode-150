// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array,
// otherwise return false.

var containsDuplicate = function (array) {
  seenNumber = new Set();

  for (let i = 0; i < array.length; i++) {
    if (seenNumber.has(array[i])) {
      return true;
    }
    seenNumber.add(array[i]);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 4, 3]));
