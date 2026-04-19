class Emp{
    private ename:string;
    protected salary:number
    constructor(ename:string,salary:number){
        this.ename=ename
        this.salary=salary
    }
    raiseSalary():void{
        this.salary+=this.salary*0.1
    }
    toString():string{
        return `${this.ename},${this.salary}`
    }
}

class Manager extends Emp{
    bonus:number
    constructor(ename:string,salary:number,bonus:number){
        super(ename,salary)
        this.bonus=bonus
    }
    
    raiseIncome(): void {
        super.raiseSalary()
        this.bonus+=this.bonus*0.1
    }
     toString():string{
        return `${super.toString()},${this.bonus}`
    }
}

let boss=new Manager("Namita",50000,25000)
console.log("before raise")
console.log(boss)
boss.raiseIncome()
console.log("afrer raise")
console.log(boss)
