interface User{
    name:string,
    age:number,
    show():void
}

class Person implements User{
    name: string
    age: number
    gender:string
    constructor(name:string,age:number,gender:"male"|"female"){
        this.name=name
        this.age=age
        this.gender=gender
    }
    show(): void {
        console.log(`Name: ${this.name} and Age is ${this.age} and Gender is ${this.gender}`)
    }
}
let person=new Person("Divya",29,"female")
person.show()