interface Notifier{
    send(message:string):void
}

class EmailServces implements Notifier{
    send(message: string): void {
        console.log(`sending Email: 
            ${message}`)
    }
}

class SmsServices implements Notifier{
    send(message: string): void {
        console.log(`sending SMS ${message}`)
    }
}

function notifyUser(notifier:Notifier,message:string){
    notifier.send(message)
}
const email=new EmailServces()
const MySMS=new SmsServices()
notifyUser(email,"Welcome to the App")
notifyUser(MySMS,"Your OTP is 1234")