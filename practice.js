const capitalize = (str) => {
  const lower = str.toLowerCase();

  return lower[0].toUpperCase()+lower.slice(1);
}

const reverseString = (str) => {
  const revStr = str
    .split('')
    .reverse()
    .join('');
  return revStr
}

const calculator = (a,b) => {
  const add = () =>
    typeof a === "number" && typeof b === "number" ? a + b : "Invalid input";
  const sub = () =>
    typeof a === "number" && typeof b === "number" ? a - b : "Invalid input";
  const mult = () =>
    typeof a === "number" && typeof b === "number" ? a * b : "Invalid input";
  const div = () =>
    !(typeof a === "number" && typeof b === "number")
      ? "Invalid input"
      : b === 0
      ? "Infinity"
      : a / b;

  return { 
    add, 
    sub, 
    mult, 
    div
  }
} 

const ceasarCipher = (text, shift) => {
  //ceasarcipher algorithm from https://blog.stranianelli.com/how-to-code-a-caesar-cipher-in-javascript/

  // create uppercase array (ABC...XYZ) 
const uppercase = () => {
  return ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // return [...Array(26)].map(
  //   (n, i) => `${String.fromCharCode(i + "A".charCodeAt())}`
  // );
};
  
  // create lowercase array (abc...xyz)
const lowercase = () =>
  [...Array(26)].map((n, i) => `${String.fromCharCode(i + "a".charCodeAt())}`);
  // helper to determine mapped value based on shift
const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
};
  // helper for creating encoding map  
const chiper = (array, shift) => {
  const cipher = {};
  array.forEach((value, index) => {
    cipher[value] = array[mod(index + shift, array.length)];
  });
  return cipher;
};
  // create upper and lower case reference encoding map based on shift
const caesarChipher = (shift) => {
  return {
    ...chiper(uppercase(), shift),
    ...chiper(lowercase(), shift),
  };
};
// filter and encode only valid letters
const processCharacter = (cipher, character) => {
  return cipher.hasOwnProperty(character) ? cipher[character] : character;
};

const caesar = caesarChipher(shift);
return [...text].map((c) => processCharacter(caesar, c)).join("");

  // const strArr = [...str];
  // const newStr = strArr.map(char) => processCharacter(caesar, char)).join("");
  // return newStr;
}

const analyzeArray = (array) => {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
}