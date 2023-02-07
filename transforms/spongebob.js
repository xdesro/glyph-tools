export default {
  name: 'Spongebob',
  transform: (str) => {
    return str
      .split('')
      .map((char, i) => {
        if (i % 2 === 1) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join('');
  },
};
