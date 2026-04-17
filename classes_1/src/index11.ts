class Account{
    public  accountNumber:number
    public  holderName:string
    private balance:number
    constructor( accountNumber:number, holderName:string,balance:number) {  
        this.accountNumber=accountNumber
        this.holderName=holderName
        this.balance=balance
    }
  deposit(amount:number){
    if(amount<=0){
        console.log("Amount to be deposit must be positive number")
        return
    }
    this.balance+=amount
    console.log(`deposit amount is ${amount}`)
  }
  withdraw(amount:number){
        if(amount<=0){
        console.log("Amount to be deposit must be positive number")
        return
    }
    if(amount>this.balance){
        console.log(`insufficient balance`)
        return
    }
    this.balance-=amount
    console.log(`Withdrawn ${amount}`)
  }

  checkBalance()
  {
      console.log(`current balance is ${this.balance}`)
  }
  displayDetails(){
    console.log(`Holder Name is:${this.holderName}:`)
    console.log(`Account Number is:${this.accountNumber}`)
    console.log(`current balance is:${this.balance}`)
  }
}

let account=new Account(1234,"shiva",32000)
console.log(account.accountNumber)
console.log(account.holderName)
// console.log(account.balance)

account.withdraw(8000)
account.checkBalance()