import euclidean from '../euclidean';

describe('euclidean', () => {
    it('should calculate GCD', () => {
        expect(euclidean(0, 0)).toBeNull();
        expect(euclidean(2, 0)).toBe(2);
        expect(euclidean(0, 2)).toBe(2);
        expect(euclidean(1, 2)).toBe(1);
        expect(euclidean(2, 1)).toBe(1);
        expect(euclidean(6, 6)).toBe(6);
        expect(euclidean(2, 4)).toBe(2);
        expect(euclidean(4, 2)).toBe(2);
        expect(euclidean(5, 13)).toBe(1);
        expect(euclidean(27, 13)).toBe(1);
        expect(euclidean(24, 60)).toBe(12);
        expect(euclidean(60, 24)).toBe(12);
        expect(euclidean(1071, 462)).toBe(21);
        expect(euclidean(462, 1071)).toBe(21);
        expect(euclidean(462, -1071)).toBe(21);
        expect(euclidean(-462, -1071)).toBe(21);
    });
});
