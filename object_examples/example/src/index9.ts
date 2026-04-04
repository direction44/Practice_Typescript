let user:{name:string,greet:()=>string}={name:"Raha",greet:function(){
    return `Hello ${user.name}`
}}
console.log(user.greet())