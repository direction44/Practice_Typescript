interface User{
    id:number,
    name:string,
    email:string
}

interface Product{
    id:number,
    name:string,
    price:number
}

interface Order{
    id:number,
    user:User;
    product:Product[]    
    totalAmount:number,
    status:OrderStatus
}

type OrderStatus="pending"|"completed"|"failed"
interface PaymentStratergy{
    pay(amount:number):void
}
 class UPIPayment implements PaymentStratergy{
    pay(amount: number): void {
        console.log("Payment using UPI Is"+amount)
    }
 }
 class CODPayment implements PaymentStratergy{
    pay(amount: number): void {
        console.log("Payment using COD Is"+amount)
    }
 }
  class CardPayment implements PaymentStratergy{
    pay(amount: number): void {
        console.log("Payment using Card Is"+amount)
    }
 }

 class orderService{
 createOrder(user:User,products:Product[]):orderResponce{
    if(products.length===0){
        return{
            success:false,
            error:"No prouct selected"
        }
    }
    let total=0
    products.forEach((product)=>{
        total+=product.price
    })
    return{
        success:true,
        data:{
            id:1,
            user,
            product:products,
            totalAmount:total,
            status:"pending"
        }
    }
}

 processPaymentMethod(order:Order,strategy:PaymentStratergy):orderResponce{
    if(order.status!=="pending"){
        return{
            success:false,
            error:"Order cancelled or proccessed"
        }
    }

    strategy.pay(order.totalAmount)
    return{
        success:true,
        data:{
            ...order,
            status:"completed"
        }
    }

}

 }
type orderSuccessResponce={
    success:true,
    data:Order
}

type errorResponce={
    success:false,
    error:string
}

type orderResponce=orderSuccessResponce|errorResponce

const user:User={
    id:101,
    name:"Garvit",
    email:"gravit@gmail.com"
}

const products:Product[]=[{id:101,name:"Laptop",price:70000},{id:1012,name:"Mouse",price:4000}]

let orderSer=new orderService()
const responce=orderSer.createOrder(user,products)
if(responce.success){
    console.log("Order created",responce.data)
    let UPI=new UPIPayment()
    let paymentres=orderSer.processPaymentMethod(responce.data,UPI)
    if(paymentres.success){
            // console.log(paymentres,paymentres.data)
        console.log("payment Successfull Final Order:",paymentres.data)
    }
    else{
        console.log(`Payment error`,paymentres.error)
    }
}
else{
    console.log(`error in creating order ${responce.error}`)
}