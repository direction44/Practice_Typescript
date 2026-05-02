function mergeArray<T,U>(first:T[],second:U[]):(T|U)[]{
    return [...first,...second]
}

console.log(mergeArray([23,45,63,6,87],["A","B","C","D"]))
