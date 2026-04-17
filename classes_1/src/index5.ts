class Emp{
    constructor(public ename:string,public age:number) {    }

}

let e1=new Emp("shiva",32)
let e2=new Emp("Mannat",15)
console.log(`Name: ${e1.ename}, age:${e1.age}`)
console.log(`Name: ${e2.ename}, age:${e2.age}`)