//Ошибка происходит потому, что askPassword получает функции 
//loginOk/loginFail без контекста.
//Когда они вызываются, то this=undefined.

//Используем bind, чтобы передать в askPassword функции 
//loginOk/loginFail с уже привязанным контекстом:

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));