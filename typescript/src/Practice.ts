const getGCM = (num1: number, num2: number): number => {
  // Return greatest common multiple of two numbers (greatest number they're both divisible by)
  let multiples: number[] = getMultiples(num1).concat(getMultiples(num2));
  multiples.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < multiples.length - 1; i++) {
    if (multiples[i] == multiples[i + 1]) {
      return multiples[i];
    }
  }
  return 1;
};

const getMultiples = (num: number): number[] => {
  let multiples: number[] = [];
  if (num == 0) multiples.push(num);
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) multiples.push(i);
  }
  return multiples;
};

const isPrime = (num: number): boolean => {
  num = Math.abs(num);
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const flip = (input: string): string => {
  // Reverses string
  let outputArray: string[] = [];
  for (let i = input.length - 1; i >= 0; i--) {
    outputArray.push(input[i]);
  }
  return outputArray.join('');
};

const factorial = (num: number): number => {
  // Returns the factorial between 1 to 18
  if (num == 0) return 1;
  return num * factorial(num - 1);
};

const cipher = (str: string): string => {
  // Replace letters with next alphabet letter then capitalize every vowel
  let newLetters: string[] = [];
  for (let letter of str) {
    let code: number = letter.charCodeAt(0);
    let newCode: number = code;
    if ((code < 90 && code > 64) || (code < 122 && code > 96)) {
      newCode = code + 1;
    } else if (code == 90) {
      newCode = 65;
    } else if (code == 122) {
      newCode = 97;
    }
    let raisedLetter: string = String.fromCharCode(newCode);
    const lowerVowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    if (lowerVowels.includes(raisedLetter)) {
      raisedLetter = raisedLetter.toUpperCase();
    }
    newLetters.push(raisedLetter);
  }
  return newLetters.join('');
};

export { getGCM, getMultiples, isPrime, flip, factorial, cipher };
