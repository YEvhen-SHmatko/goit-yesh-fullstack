'use strict';
// console.log(
//   `Знаю что делать не обязательно но практика это все, проверте пожалуйста, конешно если есть время.`,
// );
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  let length = login.length;
  if (length < 4 || length > 16) {
    return false;
  } else {
    return true;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) !== true) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  } else {
    console.log('Такой логин уже используется!');
  }
};
// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
