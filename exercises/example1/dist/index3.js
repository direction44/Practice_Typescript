"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findUserNameById(users, id) {
    // console.log(users)
    for (let user of users) {
        // console.log(user)
        if (user[1] == id) {
            return user;
        }
    }
    return null;
}
let users = [["Disha", 10], ["priya", 20], ["yachna", 30], ["nandini", 40]];
console.log(findUserNameById(users, 40));
//# sourceMappingURL=index3.js.map