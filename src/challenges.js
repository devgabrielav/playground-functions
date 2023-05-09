// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue (word1, word2){
      if (word1 === true && word2 === true){
        return true
      } else if (word1 === true && word2 === false || word1 === false && word2 === true){
        return false
      } else if (word1 === false && word2 === false){
        return false
      }
}

console.log(compareTrue(girafa, elefante));
console.log(compareTrue(elefante, macaco));
console.log(compareTrue(macaco, macaco));

// Desafio 2 - Crie a função splitSentence


function splitSentence (frase){
      return frase.split(' ');
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName
const array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const array2 = ['foguete', 'não', 'tem', 'ré'];
const array3 = ['captain', 'my', 'captain'];
let array4 = '';

function concatName(param){
      return  ( param[param.length - 1] + ', ' + param[0]);
  }

console.log(concatName(array));
console.log(concatName(array2));
console.log(concatName(array3));

// Desafio 4 - Crie a função footballPoints
const wins = 3;
const ties = 1;

function footballPoints(vitorias, empates){
  return vitorias * wins + empates * ties 
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
