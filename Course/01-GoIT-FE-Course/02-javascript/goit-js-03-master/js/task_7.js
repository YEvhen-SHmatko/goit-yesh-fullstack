'use strict';
console.log('//===// Task 7 - не обязательный //===//'); //проше понять что к какому таску
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  //  * Метод отвечающий за добавление суммы к балансу
  //  * Создает объект транзакции и вызывает addTransaction
  deposit(amount) {
    this.balance += amount;
    let newID = this.transactions.length + 1;
    this.addTransaction({
      id: newID,
      type: Transaction.DEPOSIT,
      amount: amount,
    });
  },
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Создает объект транзакции и вызывает addTransaction
  //  *
  //  * Если amount больше чем текущий баланс, выводи сообщение
  //  * о том, что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {
    if (amount > this.balance) {
      return alert('Cнятие такой суммы не возможно, недостаточно средств.');
    } else {
      this.balance -= amount;
      let newID = this.transactions.length + 1;
      this.addTransaction({
        id: newID,
        type: Transaction.WITHDRAW,
        amount: amount,
      });
    }
  },
  //  * Метод добавляющий транзацию в свойство transactions
  //  * Принимает объект трназкции
  addTransaction(transaction) {
    return this.transactions.push(transaction);
  },
  //  * Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  //  * Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (let i of this.transactions) {
      if (i.id === id) {
        return i;
      }
    }
  },
  //  * Метод возвращает количество средств
  //  * определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let transactionTotal = [];
    for (let i of this.transactions) {
      if (i.type === type) {
        transactionTotal.push(i);
      }
    }
    return transactionTotal;
  },
};
console.log('Вводим на депозит 1');
account.deposit(1);
console.log('Проверяем баланс = 1');
console.log(account.getBalance());
console.log('Вводим на депозит 2');
account.deposit(2);
console.log('Проверяем баланс = 3');
console.log(account.getBalance());
console.log('Вводим на депозит 3');
account.deposit(3);
console.log('Проверяем баланс = 6');
console.log(account.getBalance());
console.log('Снимаем с депозита 1');
account.withdraw(1);
console.log('Проверяем баланс = 5');
console.log(account.getBalance());
console.log('Снимаем с депозита 2');
account.withdraw(2);
console.log('Проверяем баланс = 3');
console.log(account.getBalance());
console.log('Снимаем с депозита 3');
account.withdraw(3);
console.log('Проверяем баланс = 0');
console.log(account.getBalance());
console.log('Снимаем с депозита 4 но нам ругается так как нет средств');
account.withdraw(4);
console.log('Проверяем баланс = 0');
console.log(account.getBalance());
console.log('Выводим историю транзакций');
console.table(account.transactions);
console.log('Выводим транзакцию под номером 2');
console.table(account.getTransactionDetails(2));
console.log('Выводим все депозитные транзакции');
console.table(account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Выводим все транзакции по снятию средств');
console.table(account.getTransactionTotal(Transaction.WITHDRAW));
