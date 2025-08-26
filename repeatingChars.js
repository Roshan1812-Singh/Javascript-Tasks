function findRepeatingCharsFrequencyMap(str) {
  const charCounts = {}; 
  const repeatingChars = [];

  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  for (const char in charCounts) {
    if (charCounts[char] > 1) {
      repeatingChars.push(char);
    }
  }
  return repeatingChars;
}

const str1 = "Success";
console.log(findRepeatingCharsFrequencyMap(str1)); 