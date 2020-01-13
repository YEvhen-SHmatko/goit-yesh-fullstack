'use strict';
console.log('//===// Task 3 //===//');
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items = [...this.items, item];
  }
  removeItem(item) {
    // можно было и через фильтр сделать но я не понимаю как он это делает. хотя может и не надо понимать просто знать что он так может
    this.items = this.items.filter(i => i !== item);
    // по старинке через циклы мне понятнее
    // for (let i = 0; i < this.items.length; i += 1) {
    //   if (this.items[i] === item) {
    //     this.items = this.items.slice(0, i).concat(this.items.slice(i + 1));
    //   }
    // }
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);
const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
