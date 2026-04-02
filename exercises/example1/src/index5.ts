function cartTotal(cart:[string,number,number][])
{
    let total=0
   for(let [device,qty,price] of cart)
   {
    total=price*qty
   }
   let finalTotal=total+(total*16)/100
   return finalTotal
}

let Cart:[string,number,number][]=[["Laptop",3,50000],["Mouse",4,2000],["Keyboard",5,6000],["monitor",4,30000]]
console.log(cartTotal(Cart))
