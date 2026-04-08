type Product={
    id:string,
    name:string,
    price:number,
    category:string,
    quantity:number,
    isAvailable?:boolean
}

function addProduct(id:string,name:string,price:number,category:string,quantity:number,isAvailable:boolean=true):Product{
    return{
        id,
        name,
        price,
        category,
        quantity,
        isAvailable,
    }
}

function calculateInventory(products:Product[]){
    let total=0
    for(let product of products){
        total+=product.price*product.quantity
    }
    return total
}

function filterByCategory(products:Product[],category:string)
{
   return products.filter((product)=> product.category===category)
}

let product1=addProduct("101","laptop",60000,"electornic",3,true)
let product2=addProduct("102","Mobile",23000,"electornic",5)
let product3=addProduct("103","keyboard",3000,"electornic",2,false)
let product4=addProduct("104","chair",6000,"furniture",6,true)
let allProducts:Product[]=[product1,product2,product3,product4]
console.log(calculateInventory(allProducts))
console.log(filterByCategory(allProducts,"electornic"))
