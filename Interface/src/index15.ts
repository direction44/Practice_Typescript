type person={
    name:string
}

type employee={
    empId:number
}

type staff=person&employee
let intern:staff={
    name:"Niya",
    empId:201
}

console.log(intern)