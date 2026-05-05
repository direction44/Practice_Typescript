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
    searchByName(name: string): T | undefined {
        for (let item of this.items) {
            if (item.name === name) {
                return item;
            }
        }
        return undefined;
    }
     searchByID(ID: number): T | undefined {
        for (let item of this.items) {
            if (item.id === ID) {
                return item;
            }
        }
        return undefined;
    }
}

type User={
    id:number,
    name:string
}

let userObj=new storage<User>()
userObj.add({id:1,name:"Disha"})
userObj.add({id:2,name:"adi"})
console.log(userObj.get(1))
console.log(userObj.getAll())