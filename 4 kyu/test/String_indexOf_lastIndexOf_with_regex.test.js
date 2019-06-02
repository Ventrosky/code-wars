var string = "abcba";
Test.randomize([
  [string, "b", , 1, 3],
  [string, "ab", , 0, 0],
  [string, "abc", 1, -1, 0],
  [string, "ba", , 3, 3],
  [string, "cb", 1, 2, -1],
  
  [string, /bc|cb/, , 1, 2],
  [string, /a?bc|cb/, , 0, 2],
  [string, /a?bc|cb/, 2, 2, 2],
  [string, /bc|cb/, 3, -1, 2],
  [string, /b/, 2, 3, 1],
  [string, /^c/, 2, -1, -1],
  
  ["abc\ncba", /bc|cba/, , 1, 4]
]).forEach(function(args){
  test.apply(this, args);
});

function test(string, value, lastIndex, indexOf, lastIndexOf, message) {
  var vstr = value instanceof RegExp ? value.toString() : JSON.stringify(value);
  Test.assertEquals(string.indexOf(value, lastIndex), indexOf, (message?message+": ":"")+JSON.stringify(string)+".indexOf("+vstr+(lastIndex?", "+lastIndex:"")+")");
  Test.assertEquals(string.lastIndexOf(value, lastIndex), lastIndexOf, (message?message+": ":"")+JSON.stringify(string)+".lastIndexOf("+vstr+(lastIndex?", "+lastIndex:"")+")");
}