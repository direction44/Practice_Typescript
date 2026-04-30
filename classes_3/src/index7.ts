abstract class Payment{
    constructor(public amount:number) {
    }
    abstract process():void;
}

class creditCardPayment extends Payment{
    process(): void {
        console.log(`Processing ${this.amount} Using credit card...`)
    }
}


class UPIPayment extends Payment{
    process(): void {
        console.log(`Processing ${this.amount} Using UPI...`)
    }
}

function checkout(payment:Payment){
    payment.process()
}

const myPurchase=new UPIPayment(5000)
checkout(myPurchase)
