export default function uncompress(s: [string, number][]): string {
  return s.map(([char, count]) => char.repeat(count)).join('');
}
