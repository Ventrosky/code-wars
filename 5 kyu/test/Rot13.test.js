Test.describe("Rot13", function(){
  Test.it("test", function(){
    Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  })    
  Test.it("Test", function(){
    Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
  })    
  Test.it("Codewars", function(){
        Test.expect("Pbqrjnef" == rot13("Codewars"), "Input: Codewars , Expected Output: Pbqrjnef , Actual Output: " + rot13("Codewars"))
  })
  Test.it("Ruby is cool!", function(){
        Test.expect("Ehol vf pbby!" == rot13("Ruby is cool!"), "Input: Ruby is cool! , Expected Output: Ehol vf pbby! , Actual Output: " + rot13("Ruby is cool!"))
  })
  Test.it("10+2 is twelve.", function(){
        Test.expect("10+2 vf gjryir." == rot13("10+2 is twelve."), "Input: 10+2 is twelve. , Expected Output: 10+2 vf gjryir. , Actual Output: " + rot13("10+2 is twelve."))
  })
  Test.it("abcdefghijklmnopqrstuvwxyz", function(){
        Test.expect("nopqrstuvwxyzabcdefghijklm" == rot13("abcdefghijklmnopqrstuvwxyz"), "Input: abcdefghijklmnopqrstuvwxyz , Expected Output: nopqrstuvwxyzabcdefghijklm , Actual Output: " + rot13("abcdefghijklmnopqrstuvwxyz"))
  })
    
function solutionFunction(message){
  res="";
  for (i in message){
    n=message[i].charCodeAt(0);
    res+=(97<=n && n<=122) ? String.fromCharCode((n-97+13)%26+97) : (65<=n && n<=90) ? String.fromCharCode((n-65+13)%26+65) : String.fromCharCode(n);
  }
  return res;
}

  Test.it("Random Strings", function(){
        for (k=0;k<5;k++){
            random = Test.randomToken()
            solution = solutionFunction(random)
            test = rot13(random)
            Test.expect(solution == test, "Input: " + random + " , Expected Output: " + solution + " , Actual Output: " + test)
        }
  })
})