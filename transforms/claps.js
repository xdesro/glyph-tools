export default {
  name: '👏 Clapping',
  transform: (str) => {
    return str
      .match(/\b(\w+)\b/g)
      .join(' 👏 ')
      .trim()
      .concat(' 👏');
  },
};
