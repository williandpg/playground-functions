// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => ((parametro1 && parametro2) ? true : false);
console.log(compareTrue(true, true));
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
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};
console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'triângulo'));
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } if (cat2 - mouse > cat1 - mouse) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
};
console.log(catAndMouse(1, 3, 7));
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  let array2 = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0) {
      array2.push('fizz');
    } else if (array[index] % 5 === 0) {
      array2.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array2.push('fizzBuzz');
    } else {
      array2.push('bug!');
    }
  } return array2;
};
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9 - Crie a função encode e a função decode
const encode = (vogal) => {
  let frase = [];
  for (let index = 0; index < vogal.length; index += 1) {
    if (vogal[index] === 'a') {
      frase.push('1');
    } else if (vogal[index] === 'e') {
      frase.push('2');
    } else if (vogal[index] === 'i') {
      frase.push('3');
    } else if (vogal[index] === 'o') {
      frase.push('4');
    } else if (vogal[index] === 'u') {
      frase.push('5');
    } else {
      frase.push(vogal[index]);
    }
  } return frase.join('');
};
const decode = (vogal) => {
  let frase = [];
  for (let index = 0; index < vogal.length; index += 1) {
    if (vogal[index] === '1') {
      frase.push('a');
    } else if (vogal[index] === '2') {
      frase.push('e');
    } else if (vogal[index] === '3') {
      frase.push('i');
    } else if (vogal[index] === '4') {
      frase.push('o');
    } else if (vogal[index] === '5') {
      frase.push('u');
    } else {
      frase.push(vogal[index]);
    }
  } return frase.join('');
};
console.log(encode('Ola tryber bom dia'));
console.log(decode('Ol1 tryb2r b4m d31'));
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
