Test.describe("Basic tests", function() {
  Test.it("Should pass Basic tests", function() {
    Test.assertDeepEquals(array_diff([1,2], [1]), [2], "a was [1,2], b was [1]");
    Test.assertDeepEquals(array_diff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    Test.assertDeepEquals(array_diff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    Test.assertDeepEquals(array_diff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    Test.assertDeepEquals(array_diff([], [1,2]), [], "a was [], b was [1,2]");
  });
});  

Test.describe("Random tests", function() {
  const array_diff_sol = (a, b) => a.filter(e => !b.includes(e));
  const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  let a, b, expected, aLength, bLength;
  for (let i = 0; i < 40; i++) {
    a = [];
    b = [];
    aLength = generateRandomInt(0,20);
    bLength = generateRandomInt(0,aLength);
    for (let j = 0; j < aLength; j++)
      a.push(generateRandomInt(0,40) - 20);
    b = Test.randomize(a).slice(0, generateRandomInt(0, aLength));
    expected = array_diff_sol(a,b);
    Test.it("Testing for array_diff([" + a + "],[" + b + "])", function() {
      Test.assertDeepEquals(array_diff(a,b), expected, "Should work for random arrays too");
    });  
  }
});  