// Задание 1

function getArrayParams(arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum = 0;
  let avg = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    };
    if (arr[index] < min) {
      min = arr[index];
    }
    sum = sum + arr[index];    
  }
  avg = sum/ arr.length;
  return { min: min, max: max, avg:Number( avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum=0
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max=0;

for (let index = 0; index < arrOfArr.length; index++) {
  if (func(arrOfArr[index])>max) {
    max = func(arrOfArr[index]);
  }
}
  return max;
}

// Задание 3
function worker2(arr) {
  let arrayParams = getArrayParams(arr);
  return Math.abs(arrayParams.max - arrayParams.min);
}
