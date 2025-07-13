/**
 * Write a method, anagrams, that takes in two strings as arguments.
 * The method should return a boolean indicating whether or not the strings are anagrams.
 * Anagrams are strings that contain the same characters, but in any order.
 */

function areMapsEqual(
  map1: Map<string, number>,
  map2: Map<string, number>
): boolean {
  if (map1.size !== map2.size) return false;
  for (const [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
}

export default function anagrams(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const mapLettersA = new Map<string, number>();
  const mapLettersB = new Map<string, number>();

  for (const char of a) {
    mapLettersA.set(char, (mapLettersA.get(char) ?? 0) + 1);
  }

  for (const char of b) {
    mapLettersB.set(char, (mapLettersB.get(char) ?? 0) + 1);
  }

  return areMapsEqual(mapLettersA, mapLettersB);
}
