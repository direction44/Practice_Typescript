type payment="UPI"|"CARD"

function processPayment(p:payment){
    switch(p){
        case "UPI":
        console.log(`payment using UPI`)
        break;
        case "CARD":
        console.log(`payment using CARD`)
        break;
        default:
        const x:never=p
    }
}

processPayment("CARD")

