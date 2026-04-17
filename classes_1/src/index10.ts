class Student{
  private age:number;
  public name:string;
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }
  getAge():number{
    return this.age
  }
}

let s1=new Student("Disha",24)
console.log(s1.name)
// console.log(s1.age)
console.log(s1.getAge())