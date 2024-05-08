{
  //   interface vehicle {
  //     name: string;
  //     brand: string;
  //     version: number;
  //   }
  class Car {
    constructor(
      public name: string,
      public brand: string,
      public version: number
    ) {}

    getName(): string {
      return ``;
    }
  }

  const car = new Car("Toyota", "Corolla", 2020);
  car.getName();
}
