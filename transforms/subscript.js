const SUBSCRIPT_LOOKUP = {
  '(': '₍',
  ')': '₎',
  '+': '₊',
  0: '₀',
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
  8: '₈',
  9: '₉',
  '=': '₌',
  a: 'ₐ',
  e: 'ₑ',
  h: 'ₕ',
  i: 'ᵢ',
  k: 'ₖ',
  l: 'ₗ',
  m: 'ₘ',
  n: 'ₙ',
  o: 'ₒ',
  p: 'ₚ',
  r: 'ᵣ',
  s: 'ₛ',
  t: 'ₜ',
  u: 'ᵤ',
  v: 'ᵥ',
  x: 'ₓ',
  ə: 'ₔ',
  β: 'ᵦ',
  γ: 'ᵧ',
  ρ: 'ᵨ',
  φ: 'ᵩ',
  χ: 'ᵪ',
  '−': '₋',
};
export default {
  name: 'Subscript',
  transform: (str) => {
    return str
      .split('')
      .map((char) => {
        return (
          SUBSCRIPT_LOOKUP[char] || SUBSCRIPT_LOOKUP[char.toLowerCase()] || char
        );
      })
      .join('');
  },
};
