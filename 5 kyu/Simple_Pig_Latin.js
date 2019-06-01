//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  return str
    .split(" ")
    .map(function(x) {
        return x.replace(/^(\w)(.*)/, '$2$1ay');  
      })
    .join(' ');
}


//Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !