"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailServces {
    send(message) {
        console.log(`sending Email: ${message}`);
    }
    attachFile(file) {
        console.log(`File ${file}`);
    }
}
class SmsServices {
    send(message) {
        console.log(`sending SMS ${message}`);
    }
    verifyPhone() {
        console.log(`Phone number getting verified...`);
    }
}
function notifyUser(notifier, message) {
    notifier.send(message);
    if (notifier instanceof EmailServces) {
        notifier.attachFile(`resume.pf`);
    }
    else if (notifier instanceof SmsServices) {
        notifier.verifyPhone();
    }
}
const email = new EmailServces();
const MySMS = new SmsServices();
notifyUser(email, "Welcome to the App");
notifyUser(MySMS, "Your OTP is 1234");
//# sourceMappingURL=index10.js.map