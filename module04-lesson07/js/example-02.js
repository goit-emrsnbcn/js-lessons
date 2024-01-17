/* 
Example 2 - Function callback

  - Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError), where the first parameter is the amount of the operation, and second and third are callbacks.

  - The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance, and onSuccess otherwise. deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less or either zero and onSuccess otherwise.
*/
