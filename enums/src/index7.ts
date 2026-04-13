enum Status{
    pending="PENDING",
    shipped="SHIPPED",
    delivered="DELIVERED"
}

let allOptions=Object.values(Status)
allOptions.forEach((option)=>{
    console.log(option)
})