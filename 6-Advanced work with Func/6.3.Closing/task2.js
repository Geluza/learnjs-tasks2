//Да, будет работать

function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
  
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();

counter.up(); // 1
counter.up(); // 2
counter.down(); // 1

