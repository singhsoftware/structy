import anagrams from "../../problems/hashing/anagram";

describe('anagrams', () => {
    it('returns true for simple anagrams', () => {
        expect(anagrams('listen', 'silent')).toBe(true);
        expect(anagrams('evil', 'vile')).toBe(true);
        expect(anagrams('elvis', 'lives')).toBe(true);
    });

    it('returns false for non-anagrams', () => {
        expect(anagrams('hello', 'world')).toBe(false);
        expect(anagrams('test', 'settle')).toBe(false);
    });

    it('is case sensitive by default', () => {
        expect(anagrams('Listen', 'silent')).toBe(false);
    });

    it('returns true for empty strings', () => {
        expect(anagrams('', '')).toBe(true);
    });

    it('returns false if lengths differ', () => {
        expect(anagrams('a', 'aa')).toBe(false);
    });

    it('handles strings with spaces and punctuation', () => {
        expect(anagrams('a gentleman', 'elegant man')).toBe(true);
    });

    it('returns true for anagrams with repeated characters', () => {
        expect(anagrams('aabbcc', 'baccab')).toBe(true);
    });

    it('returns false for strings with same letters but different counts', () => {
        expect(anagrams('aabbcc', 'abc')).toBe(false);
    });
});