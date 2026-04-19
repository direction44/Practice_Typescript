class Animal{
    makeSound():void{
        console.log(`some sound...`)
    }
}

class Dog extends Animal{
    makeSound(): number{
        console.log(`Roars....`)
        return 0
    }
}

let d=new Dog()
d.makeSound()