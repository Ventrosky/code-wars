/*
In Pokemon Go, an easy way to increase your XP level is to evolve pokemon you've caught.

Every time you catch a pokemon, you also receive some Candy. The Candy is limited to the pokemon type (eg. a Pidgey will give you Pidgey Candy) and once you have enough, you can spend it to evolve a pokemon.

To evolve a Pidgey costs 12 Pidgey Candy, but you'll be rewarded with 500 XP and 1 extra Pidgey Candy.

Surplus Pidgeys can be transferred to Professor Willow in exchange for 1 Pidgey Candy - you won't get the Pidgey back.

#Example

If you have 2 Pidgeys and 23 Pidgey Candy, you can evolve 1 Pidgey for 12 Pidgey Candy. You have 11 Pidgey Candy left, but you received 1 Pidgey Candy for evolving the first Pidgey, making the 12 you need to evolve the 2nd. You will end up with 1000 XP.

#Your job

Create a function that will take 2 integers as arguments: a number of Pidgeys and an amount of Pidgey Candy. It should return the maximum XP gained from evolving the highest possible number of Pidgeys.

Remember, you'll need to take into account the extra Pidgey Candy gained from tranferring and evolving Pidgeys.
*/

function pidgeyCalc ( pidgeys, candy ) {
    let evolved = 0;
    let pokemon = {pidgeys, candy, evolved};
    const COST = 12;
    
    const amount = (p, c)=>{
      return Math.min( Math.floor(c/COST), p);
    }
    
    const evolve = function(p){
      if (p.pidgeys == 0 || (p.pidgeys <= COST && p.candy == 0))
        return p;
      if(p.candy >= COST){
        let max = amount(p.pidgeys, p.candy);
        return evolve({
          pidgeys: p.pidgeys - max, 
          evolved: p.evolved + max, 
          candy : p.candy - ((COST -1) * max)
        });
      } else {
        return evolve({
          pidgeys: p.pidgeys-1, 
          evolved: p.evolved, 
          candy : p.candy+1
        });
      }
    }
    
    let level = evolve(pokemon).evolved * 500;
    return level;
}