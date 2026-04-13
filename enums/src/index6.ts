enum shipStatus{
    pending="PENDING",
    shipped="SHIPPED",
    delivered="DELIVERED"
}

function getShippedMessage(status:shipStatus):string{
    switch(status){
        case shipStatus.pending:
            return "order is pending";
        case shipStatus.delivered:
            return "order is delivered";
        case shipStatus.shipped:
            return "order is shipped";
        }

}

console.log(getShippedMessage(shipStatus.delivered))