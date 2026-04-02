"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findUserNameById(users, id) {
    for (let [name, userId] of users) {
        // console.log(user)
        if (userId == id) {
            return name;
        }
    }
    return null;
}
let AllUsers = [["Disha", 10], ["priya", 20], ["yachna", 30], ["nandini", 40]];
console.log(findUserNameById(AllUsers, 40));
//# sourceMappingURL=index3.js.map