import blackletter from '../../transforms/blackletter';
import blackletterBold from '../../transforms/blackletterBold';
import claps from '../../transforms/claps';
import monospace from '../../transforms/monospace';
import sansSerif from '../../transforms/sansSerif';
import sansSerifBold from '../../transforms/sansSerifBold';
import sansSerifBoldItalic from '../../transforms/sansSerifBoldItalic';
import sansSerifItalic from '../../transforms/sansSerifItalic';
import serifBoldItalic from '../../transforms/serifBoldItalic';
import serifItalic from '../../transforms/serifItalic';
import spongebob from '../../transforms/spongebob';
import strikethrough from '../../transforms/strikethrough';
import subscript from '../../transforms/subscript';
import superscript from '../../transforms/superscript';
import widetext from '../../transforms/widetext';

const details = document.querySelector('.about');
const textInput = document.querySelector('.app__input');
const output = document.querySelector('.app__output');
const modeButtons = document.querySelectorAll(
  '.app__actions input[type="radio"]'
);
const clipboardbutton = document.querySelector('.app__copy');

const MODES = [
  {
    name: 'Normal',
    transform: (str) => str,
  },
  blackletter,
  blackletterBold,
  claps,
  monospace,
  sansSerif,
  sansSerifBold,
  sansSerifBoldItalic,
  sansSerifItalic,
  serifBoldItalic,
  serifItalic,
  spongebob,
  strikethrough,
  subscript,
  superscript,
  widetext,
];
const state = {
  inputText: '',
  modes: MODES,
  activeMode: MODES[0].name,
};

const listeners = [];

const subscribe = (listener) => {
  listeners.push(listener);
};

const notifyListeners = () => {
  listeners.forEach((listener) => listener(state));
};

const setState = (updates) => {
  Object.assign(state, updates);
  notifyListeners();
};
const updateOutput = () => {
  if (state.inputText.length === 0) {
    output.classList.add('app__output--inactive');
    clipboardbutton.classList.add('app__copy--inactive');
    output.innerText = 'Text will be output here.';
  } else {
    output.classList.remove('app__output--inactive');
    clipboardbutton.classList.remove('app__copy--inactive');
    const modeLookup = state.modes.find(
      (mode) => mode.name === state.activeMode
    );
    output.innerText = modeLookup.transform(state.inputText);
  }
};
const setActiveMode = () => {};

textInput.addEventListener('input', (event) => {
  setState({ inputText: event.target.value });
});

modeButtons.forEach((button) => {
  button.addEventListener('change', (event) => {
    setState({ activeMode: event.currentTarget.value });
  });
});

clipboardbutton.addEventListener('click', (e) => {
  if (state.inputText.length > 0) {
    navigator.clipboard.writeText(output.innerText);
    console.log(`Copied ${output.innerText} to clipboard.`);
    clipboardbutton.classList.add('app__copy--copied');
    setTimeout(() => {
      clipboardbutton.classList.remove('app__copy--copied');
    }, 1500);
  }
});

// subscribe(console.log);
subscribe(updateOutput);
subscribe(setActiveMode);
// setState({ inputText: 'Hello World' });

if (matchMedia('(min-width: 960px)').matches) {
  details.setAttribute('open', true);
}
window.addEventListener('resize', (e) => {
  if (matchMedia('(min-width: 960px)').matches) {
    details.setAttribute('open', true);
  } else {
    details.removeAttribute('open');
  }
});
