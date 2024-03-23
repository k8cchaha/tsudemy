interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;  
}
// summary 的函式, 回傳string


// Car
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return this.name
  }
}

// 太長...
const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
  console.log('Hi')
}

const printVehicleII = (vehicle: Vehicle): void => {
  console.log('Hi')
}

printVehicleII(oldCivic)

