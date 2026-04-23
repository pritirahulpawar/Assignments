// Array of transactions: positive values represent credits, negative values represents debit
const transactions: number[] =[50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

//Variables to store count and amount of credit and debit
let totalCredits: number = 0;
let totalDedits: number = 0;
let totalCreditAmount: number = 0;
let totalDeditAmount: number = 0;
let suspiciousTransactions: number = 0;

// itrate through each transaction in the array
for (const amount of transactions){
    if(amount > 0){
        //credit transaction
        totalCredits++;
        totalCreditAmount += amount;

        // Check for suspiciously large credit transaction
        if(amount > 10000){
            console.log(`Suspicious credit transcation with Amount: ${amount} `);
            suspiciousTransactions++;
        } 
    } else {
        // Debit transaction
        totalDedits++;
        totalDeditAmount -= amount;

        // Check for suspiciously large debit transaction
        if(amount > -10000){
            console.log(`Suspicious debit transcation with Amount: ${amount} `);
            suspiciousTransactions++;
        } 
    }
}

// final balance
const finalBalance: number = totalCreditAmount - totalDeditAmount;

// Print summary
console.log("----------Transaction Summary----------");
console.log("Total number of credit transaction: ", totalCredits);
console.log("Total number of debit transaction: ", totalDedits);
console.log("Total amount credited: ", totalCreditAmount);
console.log("Total amount debited: ", totalDeditAmount);
console.log("Final remaining amount in the account: ", finalBalance);
console.log("Total number of suspicious transcations: ", suspiciousTransactions)