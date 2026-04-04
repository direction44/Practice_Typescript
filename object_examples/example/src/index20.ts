let bankAccount:{
    balance:number;
    deposit:(amt:number)=>void;
    withdraw:(amount:number)=>void
}
={
    balance:1000,
    deposit:function(amt){
        bankAccount.balance+=amt;
    },
    withdraw:function(amount){
       bankAccount.balance-=amount;
    }
}

console.log(bankAccount.balance)
bankAccount.deposit(2000)
console.log(bankAccount.balance)
bankAccount.withdraw(1000)
console.log(bankAccount.balance)
