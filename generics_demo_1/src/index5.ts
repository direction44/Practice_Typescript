interface hasID{
    id:number
}

function getID<T extends hasID>(value:T){
    console.log(value.id)
}

getID({id:101,name:"disha"})
getID({name:"niya",id:201})