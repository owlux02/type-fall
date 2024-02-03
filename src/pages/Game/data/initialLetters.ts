export const initialLetters = Array.from({ length: 26 }, (_, index) => {
  const letter = String.fromCharCode(97 + index); // 97 = 'a' in ascii format
  return {
    letter: letter,
    hit: false,
  };
});
