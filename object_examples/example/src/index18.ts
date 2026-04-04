let user:{name:string,greet:(msg:string)=>string}={
    name:"Raha",
    greet:(msg)=>{
return `${msg},Disha`    }
}
console.log(user.greet("hello"))
