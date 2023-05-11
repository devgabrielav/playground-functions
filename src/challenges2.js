// Desafio 11 - Crie a função generatePhoneNumber
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(array) {
  for (index = 0; index < array.length; index += 1) {
    for (index2 = 0; index2 < array.length; index2 += 1){
    if (array.length === 11) {
      return 'Array com tamanho incorreto.'
    } else if (array[index] < 0 || array[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    } else if (array[index] == index2 >= 3){
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
    }
}
}
}

console.log(generatePhoneNumber(numero));
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
