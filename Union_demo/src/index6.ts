function greet(person:string[]|string){
    if(typeof person==="object"){
        console.log(`Hello ${person.join(",")}`)
    }
    else{
        console.log(`Hello ${person}`)
    }
}


greet("Sachin")
greet(["Rahun","Namit","Nitya"])

