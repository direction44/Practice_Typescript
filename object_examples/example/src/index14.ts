let user:{name:string,greet:()=>string}=
{
    name:"Raha",
    greet:()=>{
    // return `Hello ${this.name}`
    return `Hello ${user.name}`
    }
}
console.log(user.greet())