"use strict";
{
    //   interface vehicle {
    //     name: string;
    //     brand: string;
    //     version: number;
    //   }
    class Car {
        constructor(name, brand, version) {
            this.name = name;
            this.brand = brand;
            this.version = version;
        }
        getName() {
            return ``;
        }
    }
    const car = new Car("Toyota", "Corolla", 2020);
    car.getName();
}
