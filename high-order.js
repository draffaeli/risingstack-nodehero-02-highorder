const numbers = [2,4,1,5,4]

function isBiggerThanTwo (num) {
  return num > 2
}

const filteredNumbers = numbers.filter(isBiggerThanTwo)

console.log(filteredNumbers)