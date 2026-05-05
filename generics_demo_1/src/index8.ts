class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    speak():string{
        return `animal can make sound`
    }

}

class Dog extends Animal{
    breed:string
    constructor(name:string,breed:string)
    {
        super(name)
        this.breed=breed
    }

    speak(): string {
        return `Dog Barks....`
    }
}

function printDetails<T extends Animal>(animal:T){
    console.log(`Animal name ${animal.name}, animal sound ${animal.speak()}`)
}

printDetails(new Animal("Generic class"))
printDetails(new Dog("Kuki","german"))