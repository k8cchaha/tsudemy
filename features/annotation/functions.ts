const add = (a: number, b: number): number => {
  return a+b
}

const logger = (msg: string): void => {
  console.log(msg)
}

const throwError = (msg: string): never => {
  throw new Error(msg)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)