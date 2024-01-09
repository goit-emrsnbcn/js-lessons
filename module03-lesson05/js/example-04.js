/* 
Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. 

There is an account object in which it is necessary to implement methods for working with balance and transaction history.
-There are only two types of transaction.
-You can deposit or withdraw money from your account.
*/

const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

const account = {
    balance: 0, //25000
    transactions: [
        { id: 1, type: "withdraw", amount: 1000 },
        //{id: 12328167312, type: 'deposit', amount: 25000}
    ],

    createTransaction(amount, type) {
        const transaction = {
            id: Date.now(), //12328167312
            type,
            amount,
        };
        //{id: 12328167312, type: 'deposit', amount: 25000}
        return transaction;
    },

    /* Task 1:
    This deposit() method is responsible for adding the amount to the balance.
      a. Calls createTransaction to create a transaction object using 'DEPOSIT' type
      b. ADDS transaction object to the END of transactions history
      c. ADDS the amount to the current account balance
   */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },

    /* Task 2:
   This withdraw() method is responsible for withdrawing the amount from the balance.
      a. Calls createTransaction to create a transaction object using 'WITHDRAW' type
      b. ADDS transaction object to the END of transactions history
      c. SUBTRACTS the amount to the current account balance
  */
};

console.log(account.balance);
account.deposit(25000);
console.log(account.balance); //25000
