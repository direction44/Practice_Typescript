class Account{
    accountNumber:number
    holderName:string
    balance:number
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

account.displayDetails()
account.deposit(5000)
console.log("After deposit 5000")
account.displayDetails()
account.withdraw(3000)
console.log("After withdrwan 3000")
account.displayDetails()
