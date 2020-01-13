'use strict';
console.log('//===// Task 2 //===//');
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(object, inventoryAction, itemName) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  const action = inventoryAction.bind(object, itemName);
  action();
};

invokeInventoryOperation(inventory, inventory.add, 'Аптечка');
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation(inventory, inventory.remove, 'Фильтр');
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
