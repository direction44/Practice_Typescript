enum UserRole{
    Admin="ADMIN",
    editor="EDITOR",
    viewer="VIEWER"
}

function canDelete(role:UserRole):boolean{
    return role===UserRole.Admin
}

console.log(canDelete(UserRole.Admin))