// 以下都不需要加 TS 註釋
let apple: number = 5;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date()

// Array
let colors: string[] = ['red', 'yellow']

// Classes
class Car {

}
let car: Car = new Car();

// Object
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// -------
// 以下需要使用 annotations
// 1)
const json = '{"x":10, "y":19}'
const coordinates = JSON.parse(json)
console.log(coordinates)
// 解法：
// const coordinates: { x: number, y: number} = JSON.parse(json)

// 2)
let words = ['red', 'green']
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}
// 解法：
// let foundWord: boolean;
// let foundWord = false;

// 3) Variable whose type cannot be inference
let numbers = [-10, -1, 12]
let numberAboveZero; // 當找不到大於0, 就是 false, 反之則為該數字
// 解法：
// let numberAboveZero: boolean | number = false
// -------
