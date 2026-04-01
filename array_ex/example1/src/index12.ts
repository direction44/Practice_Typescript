function sum(...nums:number[]){
    let total=0
    for(let i of nums){
        total+=i
    }
    return total
}

let res=sum(10,20,30,40)
console.log(res)
