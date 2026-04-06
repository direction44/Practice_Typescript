type Product={
    id:number,
    name:string,
    price:number,
    inStock:boolean
}

function printProduct(products:Product[])
{
    for(let product of products)
    console.log(`${product.name}-${product.price}`)
}

const products:Product[]=[{
    id:101,
    name:"Laptop",
    price:10000,
    inStock:true
},{
    id:102,
    name:"Mouse",
    price:5000,
    inStock:true
},{
    id:103,
    name:"Keyboard",
    price:4000,
    inStock:true
}]

printProduct(products)