class Repo<T extends {id:number}>{
    private items:T[]=[]
    add(item:T){
        this.items.push(item)
    }
    findById(id:number):T|undefined{
        return this.items.find((item)=>item.id===id)
    }
}

type User={
    id:number;
    name:string
}

let userObj=new Repo<User>()
userObj.add({id:1,name:"Disha"})
userObj.add({id:2,name:"Niya"})
console.log(userObj.findById(2))