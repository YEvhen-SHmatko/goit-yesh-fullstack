'use strict';
console.log('//===// Task 1 //===//'); //проше понять что к какому таску
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;
for (let key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}
