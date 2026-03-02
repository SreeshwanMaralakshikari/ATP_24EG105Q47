/*Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//(1) filter() all credit transactions
let creditTransactions=transactions.filter((transaction)=>transaction.type==="credit")

//Print List of Credit Transactions
console.log("Details of Credit Transactions")
console.log(creditTransactions)


//(2) map() to extract only transaction amounts
let onlyTransactiosnAmount=transactions.map((transaction)=>transaction.amount)

//Print only Transactions Amount
console.log("Transactions Amount Only")
console.log(onlyTransactiosnAmount)

//(3) reduce() to calculate final account balance
let finalAccountBalance=transactions.reduce((accountBalance,transaction)=>
{
    if(transaction.type==="credit")
        return accountBalance+transaction.amount
    if(transaction.type==="debit")
        return accountBalance-transaction.amount
},0)

//Print Final Account Balance
console.log("Final Account Balance:",finalAccountBalance)


//(4) find() the first debit transaction
let findFirstDebitTransaction=transactions.find((transaction)=>transaction.type==="debit")

//If there are debit transactions, then extract 1st
if(findFirstDebitTransaction)
{
    //Print details of 1st Debit Transaction
    console.log("Details of First Debit Transaction:")
    console.log(findFirstDebitTransaction)
}
//If there are no debit transactions
else
{
    //Print no debit transactions
    console.log("Debit Transactions do not exist")
}

//(4) findIndex() of transaction with amount 10000
let findIndexOfTransactionAmount10000=transactions.findIndex((transaction)=>transaction.amount===10000)

//If there are transaction with amount 10000
if(findIndexOfTransactionAmount10000)
{
    //Print details of transaction with amount 10000
    console.log("Index of Transaction with amount 10000:",findIndexOfTransactionAmount10000)
}
//If there are no transaction with amount 10000
else
{
    //Print no transaction with amount 10000
    console.log("Transaction with amount 10000 do not exist")
}