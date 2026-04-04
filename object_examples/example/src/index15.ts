let user:{name:string,greet:()=>void}=
{
    name:"Raha",
    greet:()=>{
    console.log("Hello "+user.name)
    }
}
user.greet()