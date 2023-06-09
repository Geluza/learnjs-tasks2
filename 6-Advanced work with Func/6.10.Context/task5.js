//Можно использовать стрелочную функцию-обёртку:

askPassword(() => user.login(true), () => user.login(false));
//Теперь она получает user извне и нормально выполняется.
//Или же можно создать частично применённую функцию на основе 
//user.login, которая использует объект user в качестве контекста 
//и получает соответствующий первый аргумент:

askPassword(user.login.bind(user, true), user.login.bind(user, false));