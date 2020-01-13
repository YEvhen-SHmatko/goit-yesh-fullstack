'use strict';
// Напиши скрипт, который реагирует на изменение значения
// input#font-size-slider (событие input) и обновляет инлайн-стиль span#text обновляя его свойство font-size.
// В результате при перетаскивании ползунка будет меняться размет текста.
const range = document.querySelector('input#font-size-slider');
const text = document.querySelector('span#text');
range.addEventListener('input', e => {
  const fontSize = 6 + Number(e.currentTarget.value) / 4;
  text.setAttribute('style', `font-size:${fontSize}px`);
});
