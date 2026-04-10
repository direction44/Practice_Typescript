function getHexCode(color:"Red"|"Green"|"Blue"){
    let colors={
        Red:"#FF0000",
        Green:"#00FF00",
        Blue:"#0000FF",
    }
    return colors[color]
    
}

console.log(getHexCode("Blue"))
console.log(getHexCode("Green"))
