interface Notifier{
    send(message:string):void
}

class EmailServces implements Notifier{
    send(message: string): void {
        console.log(`sending Email: ${message}`)
    }

    attachFile(file:string):void{
        console.log(`File ${file}`)
    }
}

class SmsServices implements Notifier{
    send(message: string): void {
        console.log(`sending SMS ${message}`)
    }
    verifyPhone():void{
        console.log(`Phone number getting verified...`)
    }
}

function notifyUser(notifier:Notifier,message:string){
    notifier.send(message)
    if(notifier instanceof EmailServces){
        notifier.attachFile(`resume.pf`)
    }
    else if(notifier instanceof SmsServices){
        notifier.verifyPhone()
    }
}
const email=new EmailServces()
const MySMS=new SmsServices()
notifyUser(email,"Welcome to the App")
notifyUser(MySMS,"Your OTP is 1234")