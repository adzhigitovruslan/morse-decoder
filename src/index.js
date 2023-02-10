const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let dividedByTen = expr.match(/.{1,10}/g);

  let numbersToSymbols = []
  for (let i = 0; i < dividedByTen.length; i++) {
    let index = [...dividedByTen[i]].findIndex(el => el == 1);
    if (index !== -1) {
      numbersToSymbols.push(dividedByTen[i].slice(index).replaceAll('11', '-').replaceAll('10', '.'));
    } else {
      numbersToSymbols.push(dividedByTen[i]);
    }
  }

  let decodedStr = '';
  for (let i = 0; i < numbersToSymbols.length; i++) {
    if (numbersToSymbols[i] == '**********') {
      decodedStr += ' ';
    } else {
      decodedStr += MORSE_TABLE[numbersToSymbols[i]];
    }
  }
  return decodedStr
}

module.exports = {
  decode
}
