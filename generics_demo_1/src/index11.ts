interface hasID{
    id:number
}

interface hasName{
    name:string
}

function printDetails<T extends hasID& hasName>(obj:T):void{
    console.log(obj.id,obj.name)
}

printDetails({id:101,name:"Aditya",gender:"male"})