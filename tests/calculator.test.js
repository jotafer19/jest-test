import { calculator } from "../code/calculator";

test('Add', () => {
    expect(calculator.add(13, 15)).toBe(28);
})

test('Add', () => {
    expect(calculator.add(-3, 8)).toBe(5);
})

test('Subtract', () => {
    expect(calculator.subtract(35, 12)).toBe(23);
})

test('Subtract', () => {
    expect(calculator.subtract(100, 42)).toBe(58);
})

test('Multiply', () => {
    expect(calculator.multiply(20, 10)).toBe(200);
})

test('Multiply', () => {
    expect(calculator.multiply(14, 52)).toBe(728);
})

test('Divide', () => {
    expect(calculator.divide(200, 10)).toBe(20);
})

test('Divide', () => {
    expect(calculator.divide(728, 14)).toBe(52);
})