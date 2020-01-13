'use strict';
console.log('//===// Task 3 //===//'); //проше понять что к какому таску
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = employees => {
  let employeeMaxValue = 0;
  let employeeMaxKey = [];

  let key = Object.keys(employees);
  for (let i = 0; i < key.length; i++) {
    if (employees[key[i]] > employeeMaxValue) {
      employeeMaxValue = employees[key[i]];
      employeeMaxKey = key[i];
    }
  }
  //   return `${employeeMaxKey}: ${employeeMaxValue}`;
  return { [employeeMaxKey]: employeeMaxValue }; // вначале вывел шаблонную строку но потом увидил фразу"Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач" и вывел как обьект
};
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
