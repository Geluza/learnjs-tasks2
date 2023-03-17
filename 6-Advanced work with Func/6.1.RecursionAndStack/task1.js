//Решение с помощью цикла:

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(100) ); //5050

//Решение через рекурсию:

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log( sumTo(100) );

//Решение по формуле: sumTo(n) = n*(n+1)/2:

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log( sumTo(100) );

//решение по формуле работает быстрее всех. Оно использует всего 
//три операции для любого n, а цикл и рекурсия требуют 
//как минимум n операций сложения. Рекурсия работает медленнее всех
