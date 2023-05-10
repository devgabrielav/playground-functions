// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(word1, word2) {
  if (word1 === true && word2 === true) {
    return true
  } else if (word1 === true && word2 === false || word1 === false && word2 === true) {
    return false
  } else if (word1 === false && word2 === false) {
    return false
  }
}


// Desafio 2 - Crie a função splitSentence


function splitSentence(frase) {
  return frase.split(' ');
}


// Desafio 3 - Crie a função concatName
const nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const nomes2 = ['foguete', 'não', 'tem', 'ré'];
const nomes3 = ['captain', 'my', 'captain'];

function concatName(param) {
  return (param[param.length - 1] + ', ' + param[0]);
}


// Desafio 4 - Crie a função footballPoints
const wins = 3;
const ties = 1;

function footballPoints(vitorias, empates) {
  return vitorias * wins + empates * ties
}


// Desafio 5 - Crie a função highestCount

const array = [9, 1, 2, 3, 9, 5, 7];
const array2 = [0, 4, 4, 4, 9, 2, 1];
const array3 = [0, 0, 0];

function highestCount(param) {
  let count = 0;
  let biggestNumber = Math.max(...param);

  for (let index = 0; index < param.length; index += 1) {
    if (param[index] === biggestNumber) {
      count += 1;
    }
  }
  return count;
}


// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;


const calcRectangleArea = (base, height) => base * height;


function calcAllAreas(base, height, form) {
  if (form == 'triângulo') {
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(10, 50);
  } else if (form == 'retângulo') {
    return 'O valor da área do retângulo é de: ' + calcRectangleArea(10, 50);
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
  }
}


// Desafio 7 - Crie a função catAndMouse


function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat2 < distanciaCat1) {
    return 'cat2'
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8 - Crie a função fizzBuzz
const arrayN1 = [2, 15, 7, 9, 45];
const arrayN2 = [7, 9];
const arrayN3 = [9, 25];

function fizzBuzz(param) {
  let arrayB = [];
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] % 3 === 0 && param[index] % 5 != 0) {
      arrayB.push('fizz')
    }
    if (param[index] % 5 === 0 && param[index] % 3 != 0) {
      arrayB.push('buzz')
    }
    if (param[index] % 3 === 0 && param[index] % 5 === 0) {
      arrayB.push('fizzBuzz')
    }
    if (param[index] % 3 != 0 && param[index] % 5 != 0) {
      arrayB.push('bug!')
    }
  }
  return arrayB;
}


// Desafio 9 - Crie a função encode e a função decode

function encode(param) {
  let newArray = '';
  for (index = 0; index < param.length; index += 1) {
    if (param[index] === 'a') {
      newArray += '1';
    } else if (param[index] === 'e') {
      newArray += '2';
    } else if (param[index] === 'i') {
      newArray += '3';
    } else if (param[index] === 'o') {
      newArray += '4';
    } else if (param[index] === 'u') {
      newArray += '5';
    } else {
      newArray += param[index];
    }
  }
  return newArray;
}

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(encode('go Trybe!'));


function decode (param) {
  let newArray = '';
  for (index = 0; index < param.length; index += 1) {
    if (param[index] === '1') {
      newArray += 'a';
    } else if (param[index] === '2') {
      newArray += 'e';
    } else if (param[index] === '3') {
      newArray += 'i';
    } else if (param[index] === '4') {
      newArray += 'o';
    } else if (param[index] === '5') {
      newArray += 'u';
    } else {
      newArray += param[index];
    }
  }
  return newArray;
}

console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.'));
console.log(decode('g4 Tryb2!'));

// Desafio 10 - Crie a função techList


// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
