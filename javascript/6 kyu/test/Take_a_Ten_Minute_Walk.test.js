var fail = 
  [ 
    ['n'],
    ['n','s'],
    ['n','s','n','s','n','s','n','s','n','s','n','s'],
    ['n','s','e','w','n','s','e','w','n','s','e','w','n','s','e','w'],
    ['n','s','n','s','n','s','n','s','n','n'],
    ['e','e','e','w','n','s','n','s','e','w'] 
  ];
  

var pass = 
  [
    ['n','s','n','s','n','s','n','s','n','s'],
    ['e','w','e','w','n','s','n','s','e','w'],
    ['n','s','e','w','n','s','e','w','n','s']
  ];

describe("Walk Validator", function(){
    it ("should return false if walk is too short", function(){
        Test.expect(!isValidWalk(fail[0]));
        Test.expect(!isValidWalk(fail[1]));
    });
    it ("should return false if walk is too long", function(){
        Test.expect(!isValidWalk(fail[2]));
        Test.expect(!isValidWalk(fail[3]));
    });
    it ("should return false if walk does not bring you back to start", function(){
        Test.expect(!isValidWalk(fail[4]));
        Test.expect(!isValidWalk(fail[5]));
    });
    it ("should return true for a valid walk", function(){
        Test.expect(isValidWalk(pass[0]));
        Test.expect(isValidWalk(pass[1]));
        Test.expect(isValidWalk(pass[2]));
    });
});