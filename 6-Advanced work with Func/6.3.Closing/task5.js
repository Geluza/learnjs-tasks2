function inBetween(a, b) {
    return function(x) {
      console.log (x >= a && x <= b);
    };
  }
  
  let arr = [1, 2, 3, 4, 5, 6, 7];
  arr.filter(inBetween(3, 6)); // 3,4,5,6


  function inArray(arr) {
    return function(x) {
      console.log(arr.includes(x));
    };
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  arr1.filter(inArray([1, 2, 10])); // 1,2