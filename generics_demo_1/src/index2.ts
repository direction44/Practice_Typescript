class Storage<T>{
    private items:T[]=[]
   
    addItem(item:T):void{
        this.items.push(item)
    }

    get(index:number):T|undefined {
        if(index<0||index>this.items.length){
            return undefined
        }
        return this.items[index]
    }
    getAll():T[]{
        return this.items
    }
    remove(index:number):T|undefined {
        if(index<0||index>this.items.length){
            return undefined
        }
         return this.items.splice(index)[0]
    }

    update(index:number,newItme:T):boolean {
        if(index<0||index>this.items.length){
            return false
        }
        this.items[index]=newItme
        return true
    }

}

let obj=new Storage<number>()
obj.addItem(10)
obj.addItem(20)
obj.addItem(30)
console.log(obj.getAll())
obj.update(1,24)
console.log(obj.getAll())
obj.remove(2)