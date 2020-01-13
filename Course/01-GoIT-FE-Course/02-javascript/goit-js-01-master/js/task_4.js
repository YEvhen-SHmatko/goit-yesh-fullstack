'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const inputPayDroid = prompt('Введите количество');
if (inputPayDroid === null) {
  alert('Отменено пользователем!');
} else if (inputPayDroid >= 0) {
  totalPrice = inputPayDroid * pricePerDroid;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${inputPayDroid} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
