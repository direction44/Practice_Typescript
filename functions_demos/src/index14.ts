type Product={
    name:string,
    price:number
}

function calculateTotal(products:Product[]){
    let total=0
    products.forEach((product)=>{
        total+=product.price
    })
    return total
}

const shoppingCart:Product[]=[
    {
        name:"laptop",
        price:55000
    },
    {
        name:"Mouse",
        price:5000
    },
]

console.log(calculateTotal(shoppingCart))
