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
type paymentMethod="UPI"|"CARD"|"COD"
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

function createOrder(user:User,products:Product[]):orderResponce{
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

function processPaymentMethod(order:Order,method:paymentMethod):orderResponce{
    if(order.status!=="pending"){
        return{
            success:false,
            error:"Order cancelled or proccessed"
        }
    }
    return{
        success:true,
        data:{
            ...order,
            status:"completed"
        }
    }

}

const responce=createOrder(user,products)
if(responce.success){
    console.log("Order created",responce.data)
    let paymentres=processPaymentMethod(responce.data,"UPI")
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