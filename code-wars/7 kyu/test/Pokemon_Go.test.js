Test.describe("Basic Tests", function(){
    Test.assertEquals(pidgeyCalc(1, 12), 500, 'Expected 500');
    Test.assertEquals(pidgeyCalc(13, 144), 6500, 'Expected 6500');
    Test.assertEquals(pidgeyCalc(10, 63), 3000, 'Expected 3000');
    Test.assertEquals(pidgeyCalc(1, 63), 500, 'Expected 500');
    Test.assertEquals(pidgeyCalc(63, 1), 2500, 'Expected 2500');
    Test.assertEquals(pidgeyCalc(0, 0), 0, 'Expected 0');
  });
  
  Test.describe("Random Tests", function(){
  
    function pidgeyCalcSolution(p,c,xp){
      if (!xp) xp=0;
      while (p>0 && c>=12){c-=11;p--;xp+=500;}
      if (p>0 && p+c>12){
        while (p>0 && c<12){p--;c++;}
        return pidgeyCalcSolution(p,c,xp);
      }
      return xp;
    }
    
    var i=0;
    while (i<30) {
      var p = Math.floor(Math.random()*100);
      var c = Math.floor(Math.random()*100);
      Test.assertEquals(pidgeyCalc(p,c), pidgeyCalcSolution(p,c), 'Expected'+pidgeyCalcSolution(p,c));
      i++;
    }
});