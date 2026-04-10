type User={
    name:string,
    age:number
}
type Admin={
    name:string,
    role:string
}
let person:User|Admin

person={name:"Radha",age:34}
console.log(person)

person={name:"Niya",role:"HR"}
console.log(person)
