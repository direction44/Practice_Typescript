type Product={
name:string,
quantity:number,
price:number
}

function calculateTotal(product:Product):number{
    return product.price*product.quantity
}
function printInvoice(product:Product)
{
    let result=calculateTotal(product)
    console.log(`${product.name} price is ${result}`)
}
let p:Product={
    name:"Laptop",
    price:45000,
    quantity:4
}
printInvoice(p)