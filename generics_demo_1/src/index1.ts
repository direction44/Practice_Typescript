class Box<T>{
    private value:T
    constructor(value:T){
        this.value=value
    }

    getValue():T{
        return this.value
    }

}

let numBox=new Box<number>(100)
let strBox1=new Box<string>("100")
let boolBox2=new Box<boolean>(true)

console.log(numBox.getValue())
console.log(strBox1.getValue())
console.log(boolBox2.getValue())