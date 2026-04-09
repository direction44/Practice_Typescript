type User={
    id:string,
    name:string,
    isOnline?:boolean
}
function getOnlineUser(users:User[]){
    let onlineUsers:User[]=[]
    users.forEach((user)=>{
        if(user.isOnline)
        {
            onlineUsers.push(user)
        }
    })
    return onlineUsers
}

let allUsers:User[]=[
    {
        id:"101",
        name:"Disha",
        isOnline:true
    },
    {
        id:"102",
        name:"isha"
    },
    {
        id:"103",
        name:"Nitya",
        isOnline:true
    }
]

console.log(getOnlineUser(allUsers))
