function doubler(a:number):number
function doubler(a:string):string
function doubler(a:any){
    if(typeof a ==="number"){
        return a*2
    }
    else if(typeof a==="string"){
        return a+a
    }
}

console.log(doubler(10))
console.log(doubler("Hello"))