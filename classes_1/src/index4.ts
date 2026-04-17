class Emp{
    ename:string;
    age:number

    constructor(ename:string,age:number) {
        this.ename=ename
        this.age=age
    }
}

let e1=new Emp("shiva",32)
let e2=new Emp("Mannat",15)
console.log(`Name: ${e1.ename}, age:${e1.age}`)
console.log(`Name: ${e2.ename}, age:${e2.age}`)