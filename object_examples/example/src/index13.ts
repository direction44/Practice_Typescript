let user:{name:string,greet:()=>string}=
{
    name:"Raha",
    greet(){
    return `Hello ${this.name}`
    }
}
console.log(user.greet())