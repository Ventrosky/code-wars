function checkComments(input, markers, expected) {
  var actual;
  actual = solution(input, markers);
  return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
};

checkComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"], "apples, pears\ngrapes\nbananas")
checkComments("a #b\nc\nd $e f g", ["#", "$"], "a\nc\nd");