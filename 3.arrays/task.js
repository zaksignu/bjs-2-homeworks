function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length == arr2.length) {
    result = arr1.every((number,index)=> number === arr2[index]);
  } else {
    result = false;
  }
  return result;
}

function name(params) {
  
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(number => number > 0).filter(number => number % 3 ===0).map(number => number*10);
  return resultArr; 
}
