interface Person{
    name:string
}

interface Employee extends Person{
    empId:number
}

let emp:Employee={
    name:"achal",
    empId:101
}

console.log(emp)