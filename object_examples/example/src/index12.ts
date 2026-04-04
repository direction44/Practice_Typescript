let user:{name:string,greet:()=>string}=
{
    name:"Raha",
    greet:function(){
    return `Hello ${this.name}`
    }
}
console.log(user.greet())