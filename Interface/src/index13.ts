interface Person{
    name:string
}

interface Employee{
    salary:number
}

class Developer implements Person,Employee{
    name:string
    salary: number
    constructor(name:string,salary:number){
        this.name=name
        this.salary=salary
    }

    display(){
        console.log(`name: ${this.name} salary: ${this.salary}`)
    }
}

let dev=new Developer("Nitya",20000)
dev.display()