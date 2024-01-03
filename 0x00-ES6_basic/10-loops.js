export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const cont of array) {
    newArr.push(appendString + cont);
  }

  return newArr;
}
