const palindromes = function(word) {
  const alpha = "abcdefghizklmnopqrstuvwxyz123456789"
  let cleanedWord = word.toLowerCase()
                        .split("")
                        .filter(x => alpha.includes(x))
                        .join("")

  let reversedWord = cleanedWord.split("").reverse().join("") 
  
  return cleanedWord === reversedWord
};

// Do not edit below this line
module.exports = palindromes;
