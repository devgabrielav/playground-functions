// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
      for (let index2 = 0; index2 < array.length; index2 += 1) {
        if (array[index] === array[index2]) {
          count += 1;
          if (array[index] < 0 || array[index] > 9 || count >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC ||
    lineB < lineA + lineC ||
    lineC < lineA + lineB ||
    lineA > Math.abs(lineB - lineC) ||
    lineA > Math.abs(lineC - lineB) ||
    lineB > Math.abs(lineA - lineC) ||
    lineB > Math.abs(lineC - lineA) ||
    lineC > Math.abs(lineA - lineB) ||
    lineC > Math.abs(lineB - lineC)
  ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13 - Crie a função hydrate
/* function hydrate(string) {
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
 */
/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
