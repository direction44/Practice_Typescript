interface Payment{
    pay(amount:number):void
}

class creditCard implements Payment{
    pay(amount: number): void {
        console.log(`Paid Using credit card ${amount}`)
    }
}

class UPI implements Payment{
    pay(amount: number): void {
        console.log(`Paid Using UPI ${amount}`)

    }
}

function processPayment(payment:Payment,bill:number){
    payment.pay(bill)
}

processPayment(new creditCard(),70000)
processPayment(new UPI(),5000)