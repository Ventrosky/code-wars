Test.describe("Basic tests",_=>{
Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
Test.assertEquals(findShort("lets talk about javascript the best language"), 3); 
Test.assertEquals(findShort("i want to travel the world writing code one day"), 1); 
Test.assertEquals(findShort("Lets all go on holiday somewhere very cold"), 2); 
Test.assertEquals(findShort("Test where final word shortest see"), 3); 
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
const sol=s=>Math.min.apply(this, s.split(" ").map(a=>a.length));
var names=["Bitcoin", "LiteCoin", "Ripple", "Dash", "Lisk", "DarkCoin", "Monero", "Ethereum", "Classic", "Mine", "ProofOfWork", "ProofOfStake", "21inc", "Steem", "Dogecoin", "Waves", "Factom", "MadeSafeCoin", "BTC"];

for (var i=0;i<40;i++){
  var s=[],len=randint(1,20);
  for (var k=0;k<len;k++) s.push(names[randint(0,names.length-1)]);
  s=s.join(" ");
  Test.it(`Testing for ${s}`,_=>{
  Test.assertEquals(findShort(s),sol(s),"It should work for random inputs too");
  })
}
})