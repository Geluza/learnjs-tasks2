//factorial(n) можно получить как n умноженное на результат 
//factorial(n-1). И результат для n-1, в свою очередь, 
//может быть вычислен рекурсивно и так далее до 1

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(5) ); // 120


