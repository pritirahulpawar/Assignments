// A bank evaluates loan applicants based on the following criteria:

// 1. Credit Score:
//If the credit score is above 750, the loan is automatically approved.
//If the credit score is between 650 and 750, additional checks are performed.
//If the credit score is below 650, the loan is denied.

// 2. Income:
// For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

// 3. Employment Status:
// If the customer’s income is at least 50,000, the system checks whether the customer is employed.
// If the customer is unemployed, the loan is denied.

// 4. Debt-to-Income Ratio:
// If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// If the DTI ratio is less than 40%, the loan is approved.
// If the DTI ratio is 40% or greater, the loan is denied.

interface loanApplicantInfo{
    creditScore : number;
    customerIncome : string;
    customerIsEmployed : boolean;
    dtiRatio : number;
}

let loanApplicat = {
    creditScore :  700,
    customerIncome : "$5000",
    customerIsEmployed : false,
    dtiRatio :30
}

if(loanApplicat.creditScore > 750){
    console.log("The loan is automatically approved");
}
else if ((loanApplicat.creditScore >=650) && (loanApplicat.creditScore <=750)){
    console.log("Additional checks are performed");
    if (loanApplicat.customerIncome === "$50,000"){
        console.log("The loan is considered");
    }
    else{
        if(loanApplicat.customerIsEmployed){
            if(loanApplicat.dtiRatio >= 40){
                console.log("The loan is approved")
            }
        }
        else{
            console.log("The loan is denied");
        }
    }
}
else if(loanApplicat.creditScore < 650){
    console.log("The loan is denied");
}
else{
    console.log("Please provide proper credit score");
}

