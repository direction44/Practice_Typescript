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

function playSound(animal:Animal):void{
animal.makeSound()
}
let animal:Animal=new Dog()
playSound(animal)
animal=new Lion()
playSound(animal)