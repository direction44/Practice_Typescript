enum Status{
    pending="PENDING",
    shipped="SHIPPED",
    delivered="DELIVERED"
}

let allOptions=Object.values(Status)// values will work only in es1027
allOptions.forEach((option)=>{
    console.log(option)
})