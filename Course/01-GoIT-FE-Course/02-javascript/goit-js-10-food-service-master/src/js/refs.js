export default {
  body: document.querySelector('body'),
  menu: document.querySelector('#menu'),
  themeSwitch: document.querySelector('#theme-switch-control'),
  loc: {
    theme: localStorage.getItem('theme'),
  },
};
