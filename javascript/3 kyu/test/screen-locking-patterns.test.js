function getSolverForTests() {
    var adjacents = {
        "A": ["B", "D", "E", "F", "H"],
        "B": ["A", "C", "D", "E", "F", "G", "I"],
        "C": ["B", "D", "E", "F", "H"],
        "D": ["A", "B", "C", "E", "G", "H", "I"],
        "E": ["A", "B", "C", "D", "F", "G", "H", "I"],
        "F": ["A", "B", "C", "E", "G", "H", "I"],
        "G": ["B", "D", "E", "F", "H"],
        "H": ["A", "C", "D", "E", "F", "G", "I"],
        "I": ["B", "D", "E", "F", "H"]
    };
    
    var optionalAdjacents = {
        "A": [{marked: "B", active: "C"}, {marked: "D", active: "G"}, {marked: "E", active: "I"}],
        "B": [{marked: "E", active: "H"}],
        "C": [{marked: "B", active: "A"}, {marked: "E", active: "G"}, {marked: "F", active: "I"}],
        "D": [{marked: "E", active: "F"}],
        "E": [],
        "F": [{marked: "E", active: "D"}],
        "G": [{marked: "D", active: "A"}, {marked: "E", active: "C"}, {marked: "H", active: "I"}],
        "H": [{marked: "E", active: "B"}],
        "I": [{marked: "E", active: "A"}, {marked: "F", active: "C"}, {marked: "H", active: "G"}],
    };
      
    function adjacentsOf(node, markedNodes) {
        var adjacentNodes = adjacents[node];
        return optionalAdjacents[node]
                    .filter(obj => isIncluded(obj.marked, markedNodes))
                    .map(obj => obj.active)
                    .reduce((list, node) => addNode(node, list), adjacentNodes);
    }
    
    function addNode(node, list) { 
        var result = list.slice(0);
        result.push(node);
        return result;
    }
    
    function isIncluded(node, list){ 
      return list.indexOf(node) !== -1;
    }
    
    function countPathsFrom(node, length, markedNodes) {
        var updatedMarkedNodes = addNode(node, markedNodes);
        if (length === 1) {
            return 1;
        }
    
        var sum = 0;
        adjacentsOf(node, updatedMarkedNodes).forEach(neighborNode => {
            if (!isIncluded(neighborNode, updatedMarkedNodes)) {
                sum += countPathsFrom(neighborNode, length-1, updatedMarkedNodes);
            }
        });
    
        return sum;
    }
    
    function countPatternsFrom(firstDot, length) {
      var markedDots = []; // No nodes/dots have been marked/used when you start
      return countPathsFrom(firstDot, length, markedDots);
    }
    
    return countPatternsFrom;
  }
  
  // Dots/Edges
  var dots = "ABCDEFGHI".split('');
  // Random int generator
  var randInt = (from, to) => Math.floor(from + to*Math.random());
  // preloaded solution to compare with
  var solver = getSolverForTests(); // This comes from the pre-loaded section
  
  
  // Example test cases
  describe("Example Testcases", () => {
    Test.assertEquals(countPatternsFrom('A', 0), 0);
    Test.assertEquals(countPatternsFrom('A', 10), 0);
    Test.assertEquals(countPatternsFrom('B', 1), 1);
    Test.assertEquals(countPatternsFrom('C', 2), 5);
    
    Test.assertEquals(countPatternsFrom('D', 3), 37);
    Test.assertEquals(countPatternsFrom('E', 4), 256);
    Test.assertEquals(countPatternsFrom('E', 8), 23280);
  });
  
  // Random testcases
  describe("Random testcases", () => { 
    for (var i = 0; i < 12; i++) {
      var dot = dots[randInt(0, 8)];
      var length = randInt(0, 10);
      
      var expected = solver(dot, length);
      Test.assertEquals(countPatternsFrom(dot, length), expected);
    }
  
  });
  
  // Android valid combinations
  describe("Calculating all valid combinations for a typical Android device's lockscreen", () => {
    // Function to calculate all the possible combinations with a given length
    var allWithLength = (length) => dots.reduce((sum, dot) => sum + countPatternsFrom(dot, length), 0);
    // Calculate the total valid combinations for an Android device
    var totalValidCombinations = [4, 5, 6, 7, 8, 9].reduce((lengthSum, length) => lengthSum + allWithLength(length), 0);
    
    Test.assertEquals(totalValidCombinations, 389112);
  });