/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number|null}
 */
export default function euclidean(originalA, originalB) {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    if (a === 0 && b === 0) {
        return null;
    }

    if (a === 0 && b !== 0) {
        return b;
    }

    if (a !== 0 && b === 0) {
        return a;
    }

    // In that case (a % b) is normally means that we've subtracted b from a
    // many times until the difference became less then a.

    if (a > b) {
        return euclidean(a % b, b);
    }

    return euclidean(b % a, a);
}
