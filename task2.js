const mockString = "abc"

const equalShiftsAmount = (str) => {
  let count = 0
  let tempString = str
  do {
    let tempArr = tempString.split("")
    const popResult = tempArr.pop()
    tempString = [popResult, ...tempArr].join("")
    count++
  } while (tempString !== str);
  return count
}

const result = equalShiftsAmount(mockString)
console.log("Result count");
console.log("///////////");
console.log(result);
