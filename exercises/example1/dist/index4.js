"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findUserNameById(users, id) {
    let user = users.find(([name, ID]) => ID == id);
    return user ? user : null;
}
let AllUsers = [["Disha", 10], ["priya", 20], ["yachna", 30], ["nandini", 40]];
console.log(findUserNameById(AllUsers, 50));
//# sourceMappingURL=index4.js.map