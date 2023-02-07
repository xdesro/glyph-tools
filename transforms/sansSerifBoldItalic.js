const SANS_BOLD_ITALIC_LOOKUP = {
  A: '𝘼',
  B: '𝘽',
  C: '𝘾',
  D: '𝘿',
  E: '𝙀',
  F: '𝙁',
  G: '𝙂',
  H: '𝙃',
  I: '𝙄',
  J: '𝙅',
  K: '𝙆',
  L: '𝙇',
  M: '𝙈',
  N: '𝙉',
  O: '𝙊',
  P: '𝙋',
  Q: '𝙌',
  R: '𝙍',
  S: '𝙎',
  T: '𝙏',
  U: '𝙐',
  V: '𝙑',
  W: '𝙒',
  X: '𝙓',
  Y: '𝙔',
  Z: '𝙕',
  a: '𝙖',
  b: '𝙗',
  c: '𝙘',
  d: '𝙙',
  e: '𝙚',
  f: '𝙛',
  g: '𝙜',
  h: '𝙝',
  i: '𝙞',
  j: '𝙟',
  k: '𝙠',
  l: '𝙡',
  m: '𝙢',
  n: '𝙣',
  o: '𝙤',
  p: '𝙥',
  q: '𝙦',
  r: '𝙧',
  s: '𝙨',
  t: '𝙩',
  u: '𝙪',
  v: '𝙫',
  w: '𝙬',
  x: '𝙭',
  y: '𝙮',
  z: '𝙯',
};

export default {
  name: 'Sans Serif Bold Italic',
  transform: (str) => {
    return str
      .split('')
      .map((char) => {
        return (
          SANS_BOLD_ITALIC_LOOKUP[char] ||
          SANS_BOLD_ITALIC_LOOKUP[char.toLowerCase()] ||
          char
        );
      })
      .join('');
  },
};
