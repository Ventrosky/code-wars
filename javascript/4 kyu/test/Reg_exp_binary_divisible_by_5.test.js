Test.assertEquals(divisibleByFive instanceof RegExp, true);
Test.assertEquals(divisibleByFive.test, regExpProto.test);

Test.assertEquals(divisibleByFive.test(''), false);
Test.assertEquals(divisibleByFive.test('5'), false);

for (let i = 0; i <= 200; i++) {
  var j=Math.random()*10000|0;
  Test.assertEquals(divisibleByFive.test((j).toString(2)), j % 5 === 0);
}

Test.assertEquals(divisibleByFive.test('10011111111111111001010101010101010101010101010110111111111111111101100000000'), true);