"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let sqrRoot;
sqrRoot =  b**2-4*a*c;
if (sqrRoot>=0) {
  if (sqrRoot>0) {
    arr[0] = (-b + Math.sqrt(sqrRoot) )/(2*a);
    arr[1] = (-b - Math.sqrt(sqrRoot) )/(2*a);
    return arr;
  } else {
    arr[0] = -b/(2*a);
    return arr;
  }  
} else {
    arr = [];
    return arr;
}
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (Number.isInteger(percent)&&Number.isInteger(contribution)&&Number.isInteger(amount)) {
  let totalAmount;
  let amountForReturn;
  let amountPerMonth;

  let newDateYearsAmount = date.getFullYear();
  let newDateMonthsAmount = date.getMonth();

  let oldDate = new Date;
  let oldDateYearsAmount = oldDate.getFullYear();
  let oldDateMonthsAmount = oldDate.getMonth();

  let fullYears= newDateYearsAmount - oldDateYearsAmount -1;
  let monthsCount = (12 - oldDateMonthsAmount)+newDateMonthsAmount+12*fullYears;

  let interestRate = percent / 1200 ;
  let fullInterestRate = interestRate + 1;
   amountForReturn = amount - contribution;
   amountPerMonth = amountForReturn * (interestRate + (interestRate / (fullInterestRate**monthsCount-1)));
   totalAmount = amountPerMonth * monthsCount;
    let answer = Number(totalAmount.toFixed(2))
   return answer;
  } else {
    if (!Number.isInteger(percent)) {
      let out = 'Параметр \"Процентная ставка\" содержит неправильное значение "'+percent+'"';
      return out;
    }
    if (!Number.isInteger(contribution)) {
     let out ='Параметр \"Начальный взнос\" содержит неправильное значение "'+contribution+'"';
      return out;
    }
    if (!Number.isInteger(amount)) {
      let out = 'Параметр \"Общая стоимость\" содержит неправильное значение "'+amount+'"';
      return out;
    }
  }

}
