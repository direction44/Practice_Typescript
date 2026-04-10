function getHexCode(color:"Red"|"Green"|"Blue"){
    switch(color){
        case "Red":
            return "#FF0000"
        case "Green":
            return "#00FF00"
        case "Blue":
            return "#0000FF"
    }
}

console.log(getHexCode("Blue"))
console.log(getHexCode("Green"))
