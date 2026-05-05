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

class AnimalServices<T extends Animal>{
    private animal:T[]=[];

    add(animal:T){
        this.animal.push(animal)
    }

    findByName(name:string):T|undefined{
        return this.animal.find((a)=>a.name===name)
    }
}
let animalServices=new AnimalServices<Dog>()
animalServices.add(new Dog("Kuki","german"))
animalServices.add(new Dog("Rocky","Rottweiller"))

console.log(animalServices.findByName("Rocky"))