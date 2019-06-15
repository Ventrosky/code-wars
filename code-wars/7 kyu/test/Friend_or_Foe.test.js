Test.describe("Basic tests",function(){
Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
Test.assertSimilar(friend(["Hell", "Is", "a", "badd", "word"]), ["Hell", "badd", "word"])
Test.assertSimilar(friend(["Issa", "Issac", "Issacs", "ISISS"]), ["Issa"])
Test.assertSimilar(friend(["Robot", "Your", "MOMOMOMO"]), ["Your"])
Test.assertSimilar(friend(["Hello", "I", "AM", "Sanjay", "Gupt"]), ["Gupt"])
Test.assertSimilar(friend(["This", "IS", "enough", "TEst", "CaSe"]), ["This", "TEst", "CaSe"])
Test.assertSimilar(friend([]), [])
})

Test.describe("Random tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a)}
Array.prototype.shuffle=function(){
  var i=this.length,j,k;
  for (i;i;){
    j=Math.floor(Math.random()*this.length);
    k=this[--i];this[i]=this[j];this[j]=k;
  }
}
function sol(friends){return friends.filter(function(a){return a.length==4;});}
var base=["Alex","Arnold","Bart","Boris","Bruce","Chris","Claire","Dick","Frank","James","JoJo","Kyle","Ivan","Lisa","Max","Nikola","Omar","Rachel","Ryan","Tim"]

for (var i=0;i<40;i++){
  base.shuffle();
  friends=base.slice(0,randint(0,base.length-1));
  Test.it("Testing for "+(friends.length>0 ? friends.join(", ") : "no friends"),function(){
  Test.assertSimilar(friend(friends),sol(friends),"It should work for random inputs too")
  })
}
})