'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
const inputPassword = prompt('enter you password');
let message;
if (inputPassword === null) {
  message = 'Отменено пользователем!';
} else if (inputPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
