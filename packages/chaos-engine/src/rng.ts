/**
 * Seedable pseudo-random number generator (Mulberry32)
 * Ensures reproducible chaos testing runs with identical random sequences.
 */
export class SeededRNG {
  private s: number;

  constructor(seed: number = Date.now()) {
    this.s = Math.floor(seed) >>> 0;
  }

  /**
   * Returns a float between 0 (inclusive) and 1 (exclusive)
   */
  next(): number {
    let t = (this.s += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  /**
   * Returns an integer between min and max (inclusive)
   */
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  /**
   * Shuffles an array in place reproducibly
   */
  shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = this.nextInt(0, i);
      const temp = array[i]!;
      array[i] = array[j]!;
      array[j] = temp;
    }
    return array;
  }
}

