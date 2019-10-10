/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
Help
| Symbol | Value | |----------------| | I | 1 | | V | 5 | | X | 10 | | L | 50 | | C | 100 | | D | 500 | | M | 1000 |
*/


var RomanNumerals = {
    table : {"I":1, "IV":4, "V":5, "IX":9, "X":10, "XL":40, "L":50, "XC":90, "C":100, "CD":400, "D":500, "CM":900, "M":1000},
    findRoman: function(n){
      let max = "I";
      for (var key in this.table){
        if ((n>=this.table[key])&&(this.table[key]>this.table[max])){
          max = key;
        }
      }
      return max;
    },
    toRoman : function(n) {
      let roman = "";
      let next = "";
      while(n>0){
        next = this.findRoman(n);
        n -= this.table[next];
        roman+=next;
      }
      return roman;
    },
    fromRoman: function(s){
      let roman = 0;
      Object.keys(this.table).reverse().forEach(function(key) {
        while (s.indexOf(key) === 0){
          roman += this.table[key];
          s = s.replace(key,'');
        }
      }, this);
      return roman;
    }
};