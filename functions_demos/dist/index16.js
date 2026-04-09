"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOnlineUser(users) {
    let onlineUsers = [];
    users.forEach((user) => {
        if (user.isOnline) {
            onlineUsers.push(user);
        }
    });
    return onlineUsers;
}
let allUsers = [
    {
        id: "101",
        name: "Disha",
        isOnline: true
    },
    {
        id: "102",
        name: "isha"
    },
    {
        id: "103",
        name: "Nitya",
        isOnline: true
    }
];
console.log(getOnlineUser(allUsers));
//# sourceMappingURL=index16.js.map