"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["editor"] = "EDITOR";
    UserRole["viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
function canDelete(role) {
    return role === UserRole.Admin;
}
console.log(canDelete(UserRole.Admin));
//# sourceMappingURL=index5.js.map