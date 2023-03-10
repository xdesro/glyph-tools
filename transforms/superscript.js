const SUPERSCRIPT_LOOKUP = {
  '(': '⁽',
  ')': '⁾',
  '+': '⁺',
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
  '=': '⁼',
  A: 'ᴬ',
  B: 'ᴮ',
  C: 'ᶜ',
  E: 'ᴱ',
  G: 'ᴳ',
  H: 'ᴴ',
  I: 'ᴵ',
  J: 'ᴶ',
  K: 'ᴷ',
  L: 'ᴸ',
  M: 'ᴹ',
  N: 'ᴺ',
  O: 'ᴼ',
  P: 'ᴾ',
  R: 'ᴿ',
  T: 'ᵀ',
  U: 'ᵁ',
  W: 'ᵂ',
  a: 'ᵃ',
  b: 'ᵇ',
  c: 'ᶜ',
  d: 'ᵈ',
  e: 'ᵉ',
  f: 'ᶠ',
  g: 'ᵍ',
  h: 'ʰ',
  i: 'ⁱ',
  j: 'ʲ',
  k: 'ᵏ',
  l: 'ˡ',
  m: 'ᵐ',
  n: 'ⁿ',
  o: 'ᵒ',
  p: 'ᵖ',
  r: 'ʳ',
  s: 'ˢ',
  t: 'ᵗ',
  u: 'ᵘ',
  v: 'ᵛ',
  w: 'ʷ',
  x: 'ˣ',
  y: 'ʸ',
  z: 'ᶻ',
  Æ: 'ᴭ',
  ð: 'ᶞ',
  ŋ: 'ᵑ',
  Ǝ: 'ᴲ',
  ƫ: 'ᶵ',
  Ȣ: 'ᴽ',
  ɐ: 'ᵄ',
  ɑ: 'ᵅ',
  ɒ: 'ᶛ',
  ɔ: 'ᵓ',
  ɕ: 'ᶝ',
  ə: 'ᵊ',
  ɛ: 'ᵋ',
  ɜ: 'ᶟ',
  ɟ: 'ᶡ',
  ɡ: 'ᶢ',
  ɣ: 'ˠ',
  ɥ: 'ᶣ',
  ɦ: 'ʱ',
  ɨ: 'ᶤ',
  ɩ: 'ᶥ',
  ɪ: 'ᶦ',
  ɭ: 'ᶩ',
  ɯ: 'ᵚ',
  ɰ: 'ᶭ',
  ɱ: 'ᶬ',
  ɲ: 'ᶮ',
  ɳ: 'ᶯ',
  ɴ: 'ᶰ',
  ɵ: 'ᶱ',
  ɸ: 'ᶲ',
  ɹ: 'ʴ',
  ɻ: 'ʵ',
  ʁ: 'ʶ',
  ʂ: 'ᶳ',
  ʃ: 'ᶴ',
  ʉ: 'ᶶ',
  ʊ: 'ᶷ',
  ʋ: 'ᶹ',
  ʌ: 'ᶺ',
  ʐ: 'ᶼ',
  ʑ: 'ᶽ',
  ʒ: 'ᶾ',
  ʕ: 'ˤ',
  ʝ: 'ᶨ',
  ʟ: 'ᶫ',
  β: 'ᵝ',
  γ: 'ᵞ',
  δ: 'ᵟ',
  θ: 'ᶿ',
  φ: 'ᵠ',
  χ: 'ᵡ',
  н: 'ᵸ',
  ᴂ: 'ᵆ',
  ᴈ: 'ᵌ',
  ᴖ: 'ᵔ',
  ᴗ: 'ᵕ',
  ᴜ: 'ᶸ',
  ᴝ: 'ᵙ',
  ᴥ: 'ᵜ',
  ᵻ: 'ᶧ',
  ᶅ: 'ᶪ',
  '−': '⁻',
};
export default {
  name: 'Superscript',
  transform: (str) => {
    return str
      .split('')
      .map((char) => {
        return (
          SUPERSCRIPT_LOOKUP[char] ||
          SUPERSCRIPT_LOOKUP[char.toLowerCase()] ||
          char
        );
      })
      .join('');
  },
};
