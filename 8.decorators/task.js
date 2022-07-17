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

