function applyDiscount(price:number,discount:number=0.1):number{
    return price*(1-discount)
}

console.log(applyDiscount(100,0.1))
console.log(applyDiscount(100,0.3))
