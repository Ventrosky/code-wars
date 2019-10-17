describe("Testing", function(){
    it("should work with basic tests", function(){
      Test.assertEquals(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");
      Test.assertEquals(encodeRailFenceCipher("Hello, World!", 2), "Hlo ol!el,Wrd");
  
      Test.assertEquals(encodeRailFenceCipher("", 3), "");
      Test.assertEquals(decodeRailFenceCipher("", 3), "");
  
      Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN");
      Test.assertEquals(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE");
  
      Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 4), "WIREEEDSEEEACAECVDLTNROFO");
      Test.assertEquals(decodeRailFenceCipher("WIREEEDSEEEACAECVDLTNROFO", 4), "WEAREDISCOVEREDFLEEATONCE");
  
      Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 5), "WCLEESOFECAIVDENRDEEAOERT");
      Test.assertEquals(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 5), "WLSADOOTEEECEAEECRFINVEDR");
    });
    
    it("should work with random tests", function() {
      var lorem = 'Amet non facere minima iure unde, provident, \
      veritatis officiis asperiores ipsa eveniet sit! Deserunt \
      autem excepturi quibusdam iure unde! Porro alias distinctio \
      ipsam iure exercitationem molestiae. Voluptate fugiat quasi maiores!jk'
      
      var randomRailCount;
      
      function shuffle(string) {
        let parts = string.split('');
        for(let i = parts.length; i > 0;) {
          let random = parseInt(Math.random() * i);
          let temp = parts[--i];
          parts[i] = parts[random];
          parts[random] = temp;
        }
        return parts.join('');
      }
      
      function random() {
        return Math.floor(Math.random() * 50) + 2;
      }
      
      for (var i = 0; i < 20; i +=1) {
        randomRailCount = random();
        lorem = shuffle(lorem);
        
        Test.assertEquals(
          decodeRailFenceCipher(
            encodeRailFenceCipher(lorem, randomRailCount),
            randomRailCount
          ), 
          lorem
        );
      }
    });
  });
  