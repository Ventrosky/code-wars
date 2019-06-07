/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
   let _re = /([a-zA-Z]+)/g;
   let tag ="#";
   while (found = _re.exec(str)) {
       tag += (found[1][0].toUpperCase() + found[1].slice(1))
   }
   let n = tag.length
   return n <= 140 && n > 1 ? tag : false;
}
