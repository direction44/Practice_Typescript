interface User{
    name:string,
    greet():string
}

let user:User={
    name:"Adi",
    greet(){
        return `Hello ${this.name}`
    }
}
console.log(user.greet())