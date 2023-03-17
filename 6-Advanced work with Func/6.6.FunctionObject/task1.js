function makeCounter() {
    let count = 0;
  
    function counter() {
      console.log(count++);
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    console.log(counter);
  }