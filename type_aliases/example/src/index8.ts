type User={
    name:string,
    greet:()=>void
}

 let user:User={
    name:"Amit",
    greet(){
        console.log(`Hello ${user.name}`)
    }
 }
 user.greet()