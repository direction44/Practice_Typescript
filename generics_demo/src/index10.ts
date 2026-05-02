function mergeObject<T,U>(first:T,second:U):T&U{
    return {...first, ...second}
}

console.log(mergeObject({name:"Disha"},{age:34}))
