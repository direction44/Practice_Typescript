type Product={
    name:string,
    price:number,
    discount?:number
}
function formatTotal(amount:number,currency:string){
    let symbol=currency==="INR"?"₹":currency==="USD"?"$":"Amount"
    return `${symbol} ${amount} `
}
function calculateTotal(products:Product[]){
    let total=0
    products.forEach((product)=>{
        if(product.discount){
            let discountedPrice=product.price*(1-product.discount)
            total+=discountedPrice
        }
        else{
            total+=product.price
        }
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
