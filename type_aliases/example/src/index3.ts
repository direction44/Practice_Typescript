type Greet=(name:string)=>string;
let greetUser:Greet=(name)=>{
return`Hello ${name}`
}
console.log(greetUser("Niya"))