function findLongestWordWithMostVowels(sentence) {
  let longestWord = "";
  let maxVowelCount = 0;

  const alphabetRegex = /[a-zA-Z]/;

  const words = sentence.split(" ");

  for (const word of words) {
    let currentWord = "";
    let vowelCount = 0;

    for (const char of word) {
      if (alphabetRegex.test(char)) {
        currentWord += char;
        if ("AEIOUaeiou".includes(char)) {
          vowelCount++;
        }
      }
    }

    if (
      currentWord.length > longestWord.length ||
      (currentWord.length === longestWord.length && vowelCount > maxVowelCount)
    ) {
      longestWord = currentWord;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

const sentence =
  "What lies behind you and what lies in front of you, pales in  to what lies inside of you.";

const sentence2 =
  "What lies behind you and what lies in front of you, pales in  to what lies inside of you.    هذاانا هاني  qıeqre";

console.log(findLongestWordWithMostVowels(sentence));
console.log(findLongestWordWithMostVowels(sentence2));
