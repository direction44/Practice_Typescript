type Product={
    id:number,
    name:string,
    price:number,
    inStock:boolean
}

function printProduct(product:Product)
{
    console.log(`${product.name}-${product.price}`)
}

const p1:Product={
    id:101,
    name:"Laptop",
    price:5000,
    inStock:true
}

printProduct(p1)