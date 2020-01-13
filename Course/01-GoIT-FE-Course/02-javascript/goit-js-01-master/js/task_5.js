'use strict';
const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;
let inputCountry = prompt('Страна доставки.');
if (inputCountry === null) {
  alert('Отменено пользователем!');
} else {
  switch (inputCountry.toLowerCase()) {
    case 'китай':
      alert(
        `Доставка в ${inputCountry.toLowerCase()} будет стоить ${china} кредитов`,
      );
      break;
    case 'чили':
      alert(
        `Доставка в ${inputCountry.toLowerCase()} будет стоить ${chile} кредитов`,
      );
      break;
    case 'австралия':
      alert(
        `Доставка в ${inputCountry.toLowerCase()} будет стоить ${australia} кредитов`,
      );
      break;
    case 'индия':
      alert(
        `Доставка в ${inputCountry.toLowerCase()} будет стоить ${india} кредитов`,
      );
      break;
    case 'ямайка':
      alert(
        `Доставка в ${inputCountry.toLowerCase()} будет стоить ${jamaica} кредитов`,
      );
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}
