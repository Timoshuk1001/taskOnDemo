const { Number } = require('../scripts/task2');

describe('getDays', () => {
    test('test', () => {
        expect(true).toBe(true);
    });
    test('pass even number, get false', () => {
        expect((8).isOdd()).toBe(false);
    });
    test('pass odd number, get true', () => {
        expect((3).isOdd()).toBe(true);
    });
});