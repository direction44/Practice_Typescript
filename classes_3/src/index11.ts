abstract class Payment{
    abstract process(amount:number):void;
    generateReceipt():void{
        console.log(`Receipt Generated.....`)
    }
}

interface Refundable{
    refund(amount:number):void
}

class creditCardPayment extends Payment implements Refundable{
    process(amount:number): void {
        console.log(`Processing ${amount} Using credit card...`)
    }
    refund(amount: number): void {
        console.log(`Refunded ${amount} to credit card...`)
    }
}


class UPIPayment extends Payment{
    process(amount:number): void {
        console.log(`Processing ${amount} Using UPI...`)
    }
    refund(amount: number): void {
        console.log(`Refunded ${amount} to UPI...`)
    }
}

const p1=new creditCardPayment()
p1.process(50000)
p1.refund(4000)


const p2=new UPIPayment()
p2.process(50000)
p2.refund(4000)