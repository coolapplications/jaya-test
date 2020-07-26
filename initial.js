const pyramid = [
  [1], //Upper
  [2, 3], //Upper
  [2, 3, 4], //Lower
  [2, 3], //Lower
  [1], //Lower
];

function sumPyramid(pyramid) {
  let upper = 1,
    lower = 1;
  let rowArray = [];
  for (let i = 0; i < pyramid.length; i++) {
    for (let j = 0; j < (pyramid[i] && pyramid[i].length); j++) {
      rowArray.push(pyramid[i]);
    }
    if (pyramid[i + 1] && pyramid[i].length < pyramid[i + 1].length) {
      upper = upper * pyramid[i].reduce(sumArr, 0);
    } else {
      lower = lower * pyramid[i].reduce(sumArr, 0);
    }
    rowArray = [];
  }
  return lower - upper;
}

function sumArr(arr, idx) {
  return arr + idx;
}

console.log('The pyramid sum is', sumPyramid(pyramid));
