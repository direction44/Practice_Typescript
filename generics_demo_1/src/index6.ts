interface ientifiable{
    id:number|string
}

function getUserRecord<T extends ientifiable>(record:T){
    return `Id is ${record.id}`
}

let user={id:101,name:"disha"}
console.log(getUserRecord(user))