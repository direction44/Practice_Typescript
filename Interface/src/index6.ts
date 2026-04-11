interface User{
    name:string,
    greet():string
}

let user:User={
    name:"Adi",
    greet:()=>{
        return `Hello ${user.name}`
    }
}
console.log(user.greet())