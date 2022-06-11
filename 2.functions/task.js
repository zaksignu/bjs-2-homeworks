// Задание 1

function getArrayParams(arr) {
  let min = 200;
  let max = - 200;
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
  avg =sum/ arr.length;
  return { min: min, max: max, avg:Number( avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {
  let sum=0
  for (let index = 0; index < arr.length; index++) {
    sum =sum + arr[index];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max=0;

for (let index = 0; index < arrOfArr.length; index++) {
  currentArrayMax = func(arrOfArr[index]);
  if (currentArrayMax>max) {
    max = currentArrayMax;
  }
}
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]>max){
      max = arr[index];
    }
    if (arr[index]<min){
      min = arr[index];
    }
  }
  return Math.abs(Math.abs(max)-Math.abs(min));
}
