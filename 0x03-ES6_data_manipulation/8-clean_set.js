export default function cleanSet(set, startString) {
  let newString = '';
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const newElement = element.slice(startString.length);
      newString += `${newElement}-`;
    }
  });
  return newString.slice(0, -1);
}
