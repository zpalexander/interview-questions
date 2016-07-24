/**
 * Write a function that removes any duplicate characters from a string
 */

export default function removeDupes(s) {
  const sortedCharArray = s.split('').sort();
  const output = [];
  for (let i = 1; i < sortedCharArray.length + 1; i++) {
    if (sortedCharArray[i] !== sortedCharArray[i - 1]) {
      output.push(sortedCharArray[i - 1]);
    }
  }
  return output.join('');
}
