const add = (a, b) => a + b;
test('should add two numbers', () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Except 7`);
  // }
  expect(result).toBe(7);
});

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
test('should generate greeting from name', () => {
  const result = generateGreeting('Sarah');
  expect(result).toBe('Hello Sarah!');
});
test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});