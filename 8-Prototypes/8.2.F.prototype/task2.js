Ответы:

//Мы можем использовать такой способ, если уверены в том, 
//что свойство "constructor" существующего объекта имеет 
//корректное значение.

//Например, если мы не меняли "prototype", используемый по 
//умолчанию, то код ниже сработает:

function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name ); // Pete
//получилось, потому что User.prototype.constructor == User.
//Но если кто-то перезапишет User.prototype и забудет 
//заново назначить свойство "constructor", чтобы оно указывало 
//на User, то ничего не получится.