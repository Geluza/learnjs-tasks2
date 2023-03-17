function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      console.log(f);
    }
  
    f.toString = function() {
      console.log(currentSum);
    };
  
    console.log(f);
  }
  
  sum(1)(2); // 3
  sum(5)(-1)(2); // 6
  sum(6)(-1)(-2)(-3); // 0
  sum(0)(1)(2)(3)(4)(5); // 15
