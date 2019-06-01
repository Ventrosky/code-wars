Test.expect(splitText !== undefined, "splitText doesn't exist?!");

Test.describe("var result = splitText('Abc cde', 50)", function() {
  var results1 = splitText('Abc cde', 50);
  Test.it("result.lenghth === 1", function() {
    Test.expect(results1.length && results1.length === 1, "Something is wrong, length =/= 1!");
  });
  Test.it("result[0].length === 7", function() {
    Test.expect(results1[0] && results1[0].length && results1[0].length === 7, "Something is wrong, length =/= 7!");
  });
  Test.it("returns ['Abc cde']", function() {
    Test.assertSimilar(results1, ["Abc cde"], "wrong result");
  });
});

Test.describe("splitText('Abc cde', 5)", function() {
  var results2 = splitText('Abc cde', 5);
  Test.expect(results2.length && results2.length == 2, "Something is wrong, length =/= 2!");
  Test.expect(results2[0] && results2[0].length && results2[0].length === 3, "Something is wrong, length =/= 3!");
  Test.expect(results2[1] && results2[1].length && results2[1].length === 3, "Something is wrong, length =/= 3!");
  Test.assertSimilar(results2, ["Abc", "cde"], "wrong result");
});

Test.describe("splitText('A b C d E', 5)", function() {
  var results3 = splitText('A b C d E', 5);
  Test.expect(results3.length && results3.length == 2, "Something is wrong, length =/= 2!");
  Test.expect(results3[0] && results3[0].length && results3[0].length === 5, "Something is wrong, length =/= 5!");
  Test.expect(results3[1] && results3[1].length && results3[1].length === 3, "Something is wrong, length =/= 3!");
  Test.assertSimilar(results3, ["A b C", "d E"], "wrong result");
});

Test.describe("splitText('Lorem ipsum dolor sit amet, consectetur adipiscing', 15)", function() {
  var results4 = splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15);
  Test.assertSimilar(results4, ["Lorem ipsum", "dolor sit amet,", "consectetur", "adipiscing"], "wrong result");
});

Test.describe("splitText('', 1)", function() {
  Test.assertSimilar(splitText('', 1), [], "splitText('', 1) should return []");
});

Test.describe("var lorem = 'Lorem ipsum' + 89 characters", function() {
  var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor scelerisque elit et nullam.";
  Test.it("splitText(lorem, 50)", function() {
    var results4 = splitText(lorem, 50);
    Test.assertSimilar(results4, ["Lorem ipsum dolor sit amet, consectetur adipiscing", "elit. Fusce porttitor scelerisque elit et nullam."], "wrong result (should be [50, 49])");
  });
  Test.it("splitText(lorem, 49)", function() {
    var results5 = splitText(lorem, 49);
    Test.assertSimilar(results5, ["Lorem ipsum dolor sit amet, consectetur", "adipiscing elit. Fusce porttitor scelerisque elit", "et nullam."], "wrong result (should be [39, 49, 10])");
  });
});

Test.describe("var ipsum = 'ipsum' + 145-295 characters", function() {

function splitTextCorrect(text, max) {
  var output = [];
  text += " ";
  while (text.length > 1) {
    var tmp = text.substr(0, max + 1);
    var index = tmp.lastIndexOf(" ");
    output.push(text.substr(0, index));
    text = text.substr(index + 1);
  }
  return output;
}

  var ipsum = "ipsum dolor sit amet, consectetur adipiscing elit. Nam ut auctor ipsum. Integer non aliquet magna. Vestibulum gravida erat a nulla pretium efficitur. Vivamus feugiat vel felis non laoreet. Phasellus imperdiet dictum turpis nec elementum. Nunc tempor enim vel quam fermentum dictum. Vestibulum nullam.";
  var len = 150 + Math.floor(Math.random() * 150);
  ipsum = ipsum.substr(0, len);
  if (ipsum[ipsum.length-1] === " ") ipsum[ipsum.length-1] = "X";
  Test.it("splitText(ipsum, 100) (Google TTS standard)", function() {
    var results4 = splitText(ipsum, 100);
    Test.assertSimilar(results4, splitTextCorrect(ipsum, 100), "wrong result");
  });
});