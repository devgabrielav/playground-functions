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

//console.log(compareTrue(girafa, elefante));
//console.log(compareTrue(elefante, macaco));
//console.log(compareTrue(macaco, macaco));

// Desafio 2 - Crie a função splitSentence


function splitSentence (frase){
      return frase.split(' ');
}

//console.log(splitSentence('go Trybe'));
//console.log(splitSentence('vamo que vamo'));
//console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName
const nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const nomes2 = ['foguete', 'não', 'tem', 'ré'];
const nomes3 = ['captain', 'my', 'captain'];

function concatName(param){
      return  ( param[param.length - 1] + ', ' + param[0]);
  }

//console.log(concatName(nomes));
//console.log(concatName(nomes2));
//console.log(concatName(nomes3));

// Desafio 4 - Crie a função footballPoints
const wins = 3;
const ties = 1;

function footballPoints(vitorias, empates){
  return vitorias * wins + empates * ties 
}

//console.log(footballPoints(14, 8));
//console.log(footballPoints(1, 2));
//console.log(footballPoints(0, 0));

// Desafio 5 - Crie a função highestCount
const array = [9, 1, 2, 3, 9, 5, 7];
const array2 = [0, 4, 4, 4, 9, 2, 1];
const array3 = [0, 0, 0];
let cont = 0;

function highestCount (param){
  for (index = 0; index < param.length; index += 1){
    if (param == array || param == array2){
      if (param[index] === 9){
      return cont += 1;
    } 
    } else if (param[index] === 0){
      return cont += 1;
    }
    return cont;
  }

}

/* 
console.log(highestCount(array));
console.log(highestCount(array2));
console.log(highestCount(array3)); */

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea  = (base, height) => (base * height) / 2;

//console.log(calcTriangleArea(10, 50));

const calcRectangleArea = (base, height) => base * height;

//console.log(calcRectangleArea(10, 50));

function calcAllAreas (base, height, form){
  if (form == 'triângulo'){
    return 'O valor da área do triângulo é de: ' + calcTriangleArea(10, 50);
  } else if (form == 'retângulo'){
    return 'O valor da área do retângulo é de: ' + calcRectangleArea(10, 50);
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'
  }
}

/* console.log(calcAllAreas(10, 50, 'triângulo'));
console.log(calcAllAreas(10, 50, 'retângulo'));
console.log(calcAllAreas(10, 50, 'quadrado')); */

// Desafio 7 - Crie a função catAndMouse


function catAndMouse (mouse, cat1, cat2){
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse); 

  if (distanciaCat2 < distanciaCat1){
    return 'cat2'
  } else if (distanciaCat2 > distanciaCat1){
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
  }


console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(4, 6, 12));
console.log(catAndMouse(1, 0, 2));

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
