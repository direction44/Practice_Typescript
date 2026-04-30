"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailServces {
    send(message) {
        console.log(`sending Email: 
            ${message}`);
    }
}
class SmsServices {
    send(message) {
        console.log(`sending SMS ${message}`);
    }
}
function notifyUser(notifier, message) {
    notifier.send(message);
}
const email = new EmailServces();
const MySMS = new SmsServices();
notifyUser(email, "Welcome to the App");
notifyUser(MySMS, "Your OTP is 1234");
//# sourceMappingURL=index8.js.map