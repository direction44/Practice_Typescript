abstract class person {
    constructor(public name:string) {
        
    }
    abstract getRole():string
}

class student extends person{
    getRole(): string {
        return "Student"
    }
}

let p:person
p=new student("Ravi")
console.log(`Name ${p.name}`)
console.log(`Role ${p.getRole()}`)