class Vehicle {
  color: string = 'red';

  honk(): void {
    console.log('beep')
  }
}

class Car2 extends Vehicle {
  // redefine
  private drive(): void {
    console.log('yoyo')
  }

  startDrive(): void {
    this.drive()
  }
}

const vehicle = new Vehicle()
vehicle.honk()

const ccar = new Car2()
ccar.startDrive()

class Test {
  constructor(public color: string) {
  }
}

const tt = new Test('blue')
console.log(tt.color)

class ChildTest extends Test {
  constructor(public wheel: number, color: string) {
    super(color)
  }
}

const cc = new ChildTest(4, 'silver')
console.log(cc.color)