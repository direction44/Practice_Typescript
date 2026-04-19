class Animal{
    makeSound():void{
        console.log(`some sound...`)
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log(`Roars....`)
    }
}

let d=new Dog()
d.makeSound()