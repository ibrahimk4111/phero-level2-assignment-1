{
  class Car {
    constructor(public brand: string, public model: string, public year : number ){}
    carDetails(){
        console.log (`Your car model is: ${this.year} ${this.brand} ${this.model}`)
    }
}

const toyota = new Car ("Toyota", "Corolla", 2020)
toyota.carDetails()
}
