"use strict";
{
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        carDetails() {
            console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`);
        }
    }
    const toyota = new Car("Toyota", "Corolla", 2020);
    toyota.carDetails();
}
