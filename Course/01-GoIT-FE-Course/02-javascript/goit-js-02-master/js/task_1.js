'use strict';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива

users.shift(0);
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
users.pop(-1);
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
users.unshift('Lux');
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi');
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
users.splice(users.indexOf(userToDelete), 1);
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = 'Kong';
const insertBefore = 'Jay';
users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
