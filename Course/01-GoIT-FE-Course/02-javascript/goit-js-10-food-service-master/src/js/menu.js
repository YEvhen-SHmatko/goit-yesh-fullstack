'use strict';
import menu from '../menu.json';
import menuItem from '../menuItem.hbs';
import refs from './refs.js';
const menues = menu.reduce((acc, e) => {
  return (acc += menuItem(e));
}, '');
refs.menu.insertAdjacentHTML('beforeend', `${menues}`);
