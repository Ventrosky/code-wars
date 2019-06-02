/*
String has some very useful methods to let you search for a sub-string within another string. It even lets you specify which index to search from, or even lets you search backwards! But it doesn't let you do all this with regular expressions (regex). Let's fix that.

Replace the String prototype's .indexOf() and .lastIndexOf() methods to replicate the functionality of the original methods, but let you use a regex to search for a matching string as well as a regular old string.

They should each accept a value as the first parameter. This will be the sub-string or regex to search for. Then, they should accept an optional fromIndex parameter, an integer that will dictate where the method should start searching from.

They should return the index of the found string, or a -1 if no match was found.

One thing to note when going into the .lastIndexOf() implementation is that the fromIndex is the last index that the matched string can start from. The sub-string or regex match can trail after that index, but the index of that first character must be at the fromIndex or lower.

Well, I think that's about it. Stretch your fingers, crack your knuckles, and go for it! Enjoy!
*/

String.prototype.indexOf = function(value, fromIndex){
  _re = value instanceof RegExp ? value : new RegExp(value, "g");
  fromIndex = fromIndex || 0;
  let i = _re.toString().startsWith("/^") ? 0 : fromIndex;
  let matches = _re.exec(this.slice(i));
  return matches && i >= fromIndex ? matches.index + fromIndex : -1 ;
};

String.prototype.lastIndexOf = function(value, fromIndex){
  _re = value instanceof RegExp ? value : new RegExp(value, "g");
  fromIndex = fromIndex || this.length;
  let pos_idx = -1;
  let i = 0;
  let matches;
  while (matches = _re.exec(this.slice(i))) {
    if (matches.index + i > fromIndex)
      return pos_idx;
    pos_idx = matches.index + i;
    i++;
  }
  return pos_idx;
};