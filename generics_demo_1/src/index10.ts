function compare<T extends number|string>(a:T,b:T):boolean{
    return a===b
}

console.log(compare(10,20))
console.log(compare("Hello"," Disha"))