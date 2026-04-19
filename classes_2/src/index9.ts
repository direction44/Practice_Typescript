class Emp{
    private ename:string;
    protected salary:number
    constructor(ename:string,salary:number){
        this.ename=ename
        this.salary=salary
    }
    display(){
        console.log(`${this.ename},${this.salary}`)
    }
}

class Manager extends Emp{
    bonus:number
    constructor(ename:string,salary:number,bonus:number){
        super(ename,salary)
        this.bonus=bonus
    }
    show(){
        console.log(`salary:${this.salary} and bonus:${this.bonus}`)
    }
}

let boss=new Manager("Namita",50000,25000)
boss.display()
boss.show()