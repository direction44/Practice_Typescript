type Customer={
    id:string,
    name:string,
    email:string,
    isPremium?:boolean
}

type Order={
    orderId:string,
    customerId:string,
    items:[string,number][],
    total:number
}

function calculateOrderTotal(order:Order)
{
    let total=0
    let items=order.items
    for(let item of items)
    {
        total+=item[1]
    }
    order.total=total
}

function calculateDiscount(customer:Customer,order:Order){
        if(customer.isPremium)
        {
            return order.total*0.1
        }
        return 0
}
 function orderProcessing(customer:Customer,order:Order)
 {
    calculateOrderTotal(order)
    let Discount=calculateDiscount(customer,order)
    const finalBill=order.total-Discount
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
    items:[["Laptop",50000],["Mouse",3000]],
    total:0
 }
 console.log(orderProcessing(customer,order)
)
