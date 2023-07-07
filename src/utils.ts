export const randomNumbers = (min: number, max: number) => {
  const createRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  const numbers: number[] = [];

  for (let i = 0; i < max - min; i++) {
    const number = createRandomNumber(min, max);
    if (!numbers.includes(number)) {
      numbers.push(number);
    } else {
      i--;
    }
  }

  return numbers;
};
