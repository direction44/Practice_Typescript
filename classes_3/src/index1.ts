class Animal{
    makeSound():void{
        console.log(`some sound...`)
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log(`Barks...`)
    }
}

class Lion extends Animal{
    
    makeSound(): void {
        console.log(`Roars...`)
    }
} 

let animal:Animal=new Dog()
animal.makeSound()

animal=new Lion()
animal.makeSound()