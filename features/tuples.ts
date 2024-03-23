const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// 想要記住 type 的順序, 而不是 string | boolean | number
const pepsi: [string, boolean, number] = ['brown', true, 40]

type Drink = [string, boolean, number]

const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

