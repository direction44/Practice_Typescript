type Customer={
    id:string,
    name:string,
    email:string,
    isPremium?:boolean
}

type item={
    name:string,
    price:number
}
type Order={
    orderId:string,
    customerId:string,
    items:item[],
    total?:number
}

function calculateOrderTotal(order:Order)
{
    let total=0
    let items=order.items
    for(let item of items)
    {
        total+=item.price
    }
    order.total=total
}

function calculateDiscount(customer:Customer,order:Order){
        if(customer.isPremium)
        {
            return order.total!*0.1
        }
        return 0
}
 function orderProcessing(customer:Customer,order:Order)
 {
    calculateOrderTotal(order)
    let Discount=calculateDiscount(customer,order)
    const finalBill=order.total!-Discount
    return `Order ${order.orderId} for ${customer.name} :₹${finalBill.toFixed(2)}`
 }

 let customer:Customer={
    id:"101",
    name:"Ravi Verma",
    email:"ravi@gmail.com",
    
 }

 let order:Order={
    orderId:"ORD-1001",
    customerId:"101",
    items:[{name:"Laptop",price:50000},{name:"Mouse",price:3000}],
 }
 console.log(orderProcessing(customer,order)
)
