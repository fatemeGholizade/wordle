export const getLetterColor = (letter: string, index: number, word: string, isFinal: boolean) => {
  if (!isFinal) return "#1a1919"; // Default
  if (word[index] === letter) return "#4caf50"; // Correct
  if (word.includes(letter)) return "#ffeb3b"; // Wrong position
  return "#3a3a3a";
};
