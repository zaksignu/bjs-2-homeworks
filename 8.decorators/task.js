function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
      const hash = args.join(","); // получаем правильный хэш
      let objectInCache = cache.find((item) =>item.hash ===hash); // ищем элемент, хэш которого равен нашему хэшу
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache.result;
      }
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash,result});
      if (cache.length > 5) { 
       cache.shift();
      }
      console.log("Вычисляем: " + result);
       return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {

  let cooldown = false;

  return function() {
    if (cooldown) {
      console.log("нет колбека")
      return
    };

    console.log(func());
    cooldown = true;

    setTimeout(() => cooldown = false, delay);
  };

}


function debounceDecorator2(func, delay) {
  let requestCount = 0;
  let cooldown = false;
;
  function wrapp(){
    
    if (cooldown) {
      requestCount++;
      console.log(requestCount);
       return;
     }
     console.log(wrapp.count);
     cooldown = true;

     wrapp.count.push(requestCount);
     requestCount = 0;
     setTimeout(() => cooldown = false, delay);
  }
  wrapp.count = []
  return  wrapp;

}


// function debounceDecorator2(func, delay) {
//   let i;
//   let cooldown = false;
//   func.count = [];
//   return function() {
//    //func.apply(null, arguments);vcb
//     //func.count.push("lll");
//     if (cooldown) {
//      i++;
//      console.log(i);
//       return;
//     }
//     i++;
//     console.log(func.count);
//     cooldown = true;

//     func.count.push(i);
//     i = 0;
//     setTimeout(() => cooldown = false, delay);
//   };

// }



// function debounceDecorator2(func, delay) {
//   let timeoutId;
//   let startFlag;
//   let i;
 
//   i = 0;
//   // function wrapper(){
//   //   wrapper.history.push[i];
//   //   return func;
//   // }
//   func.hist = [];

//   return function (){
//     func.apply (null, arguments);

//     func.hist.push ("AA");
//     if ((!timeoutId)&& (startFlag !== 1)){
//     startFlag = 1;
//     i = 0;
//            //  console.log(func());
//     console.log("вызываем колбэк и создаем новый таймаут");
//     timeoutId = setTimeout(()=>{
//         timeoutId = null;
//         startFlag = 0;
//     }, delay)
//   } else {
//     i++
//     console.log("Таймер работает, сработки колбэка нет " +i)
//   }
//   }
// }


// const sum =(...args) =>  args.reduce((acc,item)=>acc+item,0);
// let p = sum(1,2,3,4,5,6);

// let  qqq =  cachingDecoratorNew(sum);
// qqq(1,2,3,4,5,6);
// qqq(2,2,3,4,5,6);
// qqq(3,2,3,4,5,6);
// qqq(1,2,3,4,5,6);
// qqq(3,5,3,4,5,6);
// qqq(4,2,3,4,5,6);
// qqq(3,5,3,6,5,6);
// qqq(4,2,7,4,5,6);

// const sss = () => console.log("123");

// const sndSignal = () => console.log("Сигнал отправлен");
// const upgadedSendSignal = debounceDecoratorNew(sndSignal, 8000);
// const upgadedSendSignal = debounceDecoratorNew(sndSignal, 8000);
// const upr =  debounceDecorator2(sndSignal, 8000);
// //  setInterval(upgadedSendSignal,2000);

// setTimeout(upgadedSendSignal,1); // Сигнал отправлен
// setTimeout(upgadedSendSignal, 2000); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upgadedSendSignal, 2000); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upgadedSendSignal, 2000); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
// setTimeout(upgadedSendSignal, 2000); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upgadedSendSignal, 2000); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgadedSendSignal, 2000); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500)
// setTimeout(upgadedSendSignal, 2000); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgadedSendSignal, 2000);
// setTimeout(upr); // Сигнал отправлен
// setTimeout(upr, 2000); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upr, 2000); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upr, 2000); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
// setTimeout(upr, 2000); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upr, 2000); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upr, 2000); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500)
// setTimeout(upr, 2000); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upr, 2000);
// console.log(upr.count);

// const sendSignal = () => console.log("Сигнал отправлен");
// const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
// setTimeout(upgradedSendSignal); // Сигнал отправлен
// setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
// setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
// setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
// setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
// setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
// setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
// console.log("www",upgradedSendSignal.count);