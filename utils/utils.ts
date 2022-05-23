export const randomColorGenerator = (): string => {
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomColorArray = [];
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomColorArray.push(characters[randomIndex])
  }
  return `#${randomColorArray.join('')}`;
}

export const directions: string[] = ['to right', 'to left', 'to top', 'to bottom']

export const getRandomDirection = (): string => directions[Math.floor(Math.random() * directions.length)];
