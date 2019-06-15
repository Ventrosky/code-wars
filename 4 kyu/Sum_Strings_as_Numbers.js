/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/
function sumStrings(a,b) { 
  let arrA, arrB;
  if (a.length >= b.length) {
    arrA = [...a].reverse();
    arrB = [...b].reverse();
  } else {
    arrA = [...b].reverse();
    arrB = [...a].reverse();
  }
  const doSum= (c,n) => {
    let [x, y] = n;
    c = c || '0';
    return String(parseInt(x)+parseInt(y)+parseInt(c)).padStart(2, '0');
  }
  let zip = arrA.map(function(e, i) {
    return [e, arrB[i] || '0'];
  });
  let result = zip.reduce(function(acc,n){
    let appo = doSum(acc[0],n).split('')
    return [ appo[0], appo[1] + acc[1]];
  },['0','']);
  return result.join('').replace(/^(0+)/, '');
}