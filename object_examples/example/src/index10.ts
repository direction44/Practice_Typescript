let user:{name:string,greet:()=>string}=
{
    name:"Raha",
    greet(){
    return `Hello ${user.name}`
    }
}
console.log(user.greet())