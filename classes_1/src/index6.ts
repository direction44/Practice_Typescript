class Emp{
    constructor(public ename:string,public age:number) {    }
    display()
    {
        console.log(`Name: ${this.ename}, age:${this.age}`)
    }
}

let e1=new Emp("shiva",32)
let e2=new Emp("Mannat",15)
e1.display()
e2.display()
