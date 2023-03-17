//В прототипе (=hamster) находится метод speedy.eat, 
//а затем он выполняется с this=speedy (объект перед точкой).
//Затем в this.stomach.push() нужно найти свойство stomach и
// вызвать для него push. Движок ищет stomach в this (=speedy), 
//но ничего не находит. Он идёт по цепочке прототипов и находит stomach в hamster.
//И вызывает для него push, добавляя еду в живот прототипа.
//Получается, что у хомяков один живот на двоих!
//И при lazy.stomach.push(...) и при speedy.stomach.push(), 
//свойство stomach берётся из прототипа (так как его нет в самом объекте), затем в него добавляются данные.

//Обратите внимание, что этого не происходит при простом 
//присваивании this.stomach=:

let hamster = {
  stomach: [],

  eat(food) {
    // присвоение значения this.stomach вместо вызова this.stomach.push
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// Живот ленивого хомяка пуст
console.log( lazy.stomach ); // <ничего>