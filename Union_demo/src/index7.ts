function greet(person:string[]|string){
    if(Array.isArray(person)){
        console.log(`Hello ${person.join(",")}`)
    }
    else{
        console.log(`Hello ${person}`)
    }
}


greet("Sachin")
greet(["Rahun","Namit","Nitya"])

