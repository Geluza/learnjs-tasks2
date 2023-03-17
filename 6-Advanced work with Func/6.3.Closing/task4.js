function sum(a) {

    return function(b) {
      console.log(a + b); // берёт "a" из внешнего лексического окружения
    };
  
  }
  
   sum(1)(2); // 3
   sum(5)(-1); // 4
