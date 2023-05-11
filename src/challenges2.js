// Desafio 11 - Crie a função generatePhoneNumber
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
function generatePhoneNumber(param) {
  let count = 0;
  for (index = 0; index < param.length; index += 1) {
    for (index2 = 0; index2 < param.length; index2 += 1) {
      if (param[index] === param[index2]) {
        count += 1;
      }
      if (param.length != 11) {
        return 'Array com tamanho incorreto.';
      }
      if (param[index] < 0 || param[index] > 9 || count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (param.length === 11) {
        return `(${param[0]}${param[1]}) ${param[2]}${param[3]}${param[4]}${param[5]}${param[6]}-${param[7]}${param[8]}${param[9]}${param[10]}`
      }
    }
  }
}


// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) || lineB < (lineA + lineC) || lineC < (lineA + lineB)) {
    if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineA - lineB)) {
      return true
    } else {
      return false
    }
  }
}


// Desafio 13 - Crie a função hydrate
function hydrate(string) {
  let count = 0;
  for (index = 0; index < string.length; index += 1) {
    for (index2 = 0; index2 < string[index].length; index2 += 1) {
      if (string[index2] == string.match(/\d+/g)) {
        count += string[index2];
      }
    }
  }
  return `${count} copos de água`
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
