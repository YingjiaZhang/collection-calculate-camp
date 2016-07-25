'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  if (number_a <= number_b) {
    for (let i = number_a; i <= number_b; i++) {
      let temp = i <= 26 ? String.fromCharCode(i + 96) : i % 26 === 0 ? String.fromCharCode((i - 1) / 26 + 96) + 'z' : String.fromCharCode(i / 26 + 96) + String.fromCharCode(i % 26 + 96);
      result.push(temp);
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      let temp = i <= 26 ? String.fromCharCode(i + 96) : i % 26 === 0 ? String.fromCharCode((i - 1) / 26 + 96) + 'z' : String.fromCharCode(i / 26 + 96) + String.fromCharCode(i % 26 + 96);
      result.push(temp);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

