const { getDays } = require('../scripts/task1');

describe('getDays', () => {
    test('test', () => {
        expect(true).toBe(true);
    });
    test('return number of day in month', () => {
        expect(getDays(2020, 2)).toBe(29);
    });
    test('return number of day in month', () => {
        expect(getDays(2020, 'February')).toBe(29);
    });
    test('return number of day in month', () => {
        expect(getDays(2020, 22)).toBe(false);
    });
    test('return number of day in month', () => {
        expect(getDays(-2020, 2)).toBe(false);
    });
    test('return number of day in month', () => {
        expect(getDays(2020, 'sldfhfh')).toBe(false);
    });
});