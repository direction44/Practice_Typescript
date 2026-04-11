interface User{
    name:string,
    age:number,
    show():void
}

class Person implements User{
    name: string
    age: number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    show(): void {
        console.log(`Name :${this.name} and Age is ${this.age}`)
    }
}
let person=new Person("Divya",29)
person.show()