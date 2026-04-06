type Address={
    city:string,
    pincode:number
}

type User={
    name:string,
    address:Address
}

let user:User={
    name:"Disha",
    address:{
        city:"Etawah",
        pincode:34553
    }
}
console.log(user)