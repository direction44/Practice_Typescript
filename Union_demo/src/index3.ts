function printId(id:string|number)
{
    if(typeof id==="string"){
            console.log("ID:",id.toLowerCase())
    }
    else{
            console.log("ID:",id.toFixed(2))
    }
}

printId(101)
printId("AD-101")