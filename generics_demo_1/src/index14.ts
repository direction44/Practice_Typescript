class storage<T extends {id:number,name:string}>{
    private items:T[]=[]
    add(item:T):void{
        this.items.push(item)
    }
    get(index:number):T|undefined{
        if(index<0||index>=this.items.length){
            return undefined
        }
        return this.items[index]
    }
    getAll():T[]|undefined{
        if(this.items.length<0)
        {
            undefined
        }
        return this.items

    }
    search(predicate:(item:T)=>boolean):T|undefined
    {
        return this.items.find(predicate)
    }
}

type User={
    id:number,
    name:string
}

let userObj=new storage<User>()
userObj.add({id:1,name:"Disha"})
userObj.add({id:2,name:"adi"})
console.log(userObj.search((u)=>u.id===1))
console.log(userObj.search((u)=>u.name==="adi"))