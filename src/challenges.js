// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => (parametro1 && parametro2) ? true : false;
console.log(compareTrue(true, false));
// Desafio 2 - Crie a função splitSentence
const splitSentence = (frase) => frase.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties * 1;
// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let maiorNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  let repeticao = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao;
};
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form = 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea}`;
  } else if (form = 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea}`;
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }
};
console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
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
