/*
Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    
The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out the punctuation as they are a part of the string.
*/

const calcFu = (x)=> (i)=> {return Math.abs(x - ((i+x) % (x*2)));};

function encodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return "";
  let fence = Array.from(Array(numberRails), () => new Array());
  let calcFu_i = calcFu(numberRails-1);
  
  [...string].forEach((c,i)=>{
    fence[calcFu_i(i)].push(c)
  })
  return fence.reduce((acc,c)=>{
    return acc + c.join('');
  },'');
}

function decodeRailFenceCipher(string, numberRails) {
  let fence_tot = Array(numberRails).fill(0);
  let fence = Array.from(Array(numberRails), () => new Array());
  let calcFu_i = calcFu(numberRails-1);
  let appo = [...string];
  appo.forEach((c,i)=>{
    fence_tot[calcFu_i(i)] += 1; 
  });
  fence_tot.forEach((tot,i)=>{
    fence[i] = appo.splice(0, tot);
  });
  let res = "";
  for (let i = 0; i < string.length; i++) {
    res += fence[calcFu_i(i)].shift();
  }
  return res;
}