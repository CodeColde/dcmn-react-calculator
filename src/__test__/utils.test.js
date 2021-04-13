import calculateValue from "../utils/calculateValue";

describe('check the calculation between 2 numbers', () => {
  it('sum of 4 and 6 should result in 10', () => {
    let sum = calculateValue("+", 4, 6);
    expect(sum).toBe(10);
  })
  it('sum of 14.2 and 7.9 should result in 22.1', () => {
    let sum = calculateValue("+", 14.2, 7.9);
    expect(sum).toBe(22.1);
  })
  it('sum of -6 and 8.936 should result in 2.936', () => {
    let sum = calculateValue("+", -6, 8.936);
    expect(sum).toBe(2.936);
  })
  it('sutraction of 664 and 227 should result in 437', () => {
    let difference = calculateValue("-", 664, 227);
    expect(difference).toBe(437);
  })
  it('sutraction of 72.5 and 77.8 should result in -5.3', () => {
    let difference = calculateValue("-", 72.5, 77.8);
    expect(difference).toBe(-5.3);
  })
})