'use strict';
// В HTML есть пустой список ul#ingredients.<ul id="ingredients"></ul>
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function addLi(e) {
  const li = document.createElement('li');
  li.textContent = e;
  return li;
}
const result = ingredients.map(e => addLi(e).outerHTML).join('');
document.all.ingredients.outerHTML = `${result}`;
