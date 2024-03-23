const carMakers = ['ford', 'toyota']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

carMakers.map((car): string => {
  return car.toUpperCase()
})

const importantDates = [new Date(), '2023-10-10']
const importantDates2: (Date|string)[] = []
importantDates2.push('Hello')