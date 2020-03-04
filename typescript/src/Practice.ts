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

export { flip, factorial };
