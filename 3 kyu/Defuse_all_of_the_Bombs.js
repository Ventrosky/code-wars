/*
There are a series of 10 bombs about to go off! Defuse them all! Simple, right?

Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.
*/
// Defuse all of the Bombs!
Bomb.diffuse( Bomb.key );
Bomb.diffuse( Bomb.key );
Bomb.diffuse( Bomb.key );
Bomb.diffuse( Bomb.key );
Bomb.diffuse( Bomb.key );

//console.log( Bomb);
//console.log( Bomb.diffuse.toString());
//console.log(Object.keys(this));
Bomb.diffuse( this['BombKey'] );
Bomb.diffuse( this['BombKey'] );
let diffuseTheBomb = () => { return this['BombKey'] }
Bomb.diffuse( this['BombKey'] );

//console.log(window.atob("VGhlIGtleSBpcyAiMy4xNDE1OSI"))The key is "3.14159"
Bomb.diffuse( 3.14159 );

let date = new Date();
date.setYear(date.getFullYear() - 4 );
Bomb.diffuse( date );

let imm_appo = {}
imm_appo.key = 43
Object.defineProperty(imm_appo, "key", { writable: false });
Bomb.diffuse( imm_appo );


function MyNumberType(n) {
  this.number=n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number+=2;
};

const object1 = new MyNumberType(7);
// continue here
Bomb.diffuse(object1 );
//console.log( Bomb);

let switc = false;
Math.random = function(){
  if (switc){ 
     return 1;
  } else{
     switc = true;
     return 0.5;
  }
}
//console.log(Math.random())
Bomb.diffuse( Bomb.key );


Array.prototype.valueOf = function(){
   return this.reduce((acc,e)=>acc+e,0);
}
let code ='eWVz';//'yes'
//console.log(new Buffer( code, 'base64' ).toString( 'ascii' ))
//console.log( [ 1, 2, 3 ] + [ 3 ] + [ 3, 4, 5, 6, 7, 8 ] == 42)

Bomb.diffuse(code);


//console.log( Bomb);
//console.log( Bomb.diffuse.toString());
