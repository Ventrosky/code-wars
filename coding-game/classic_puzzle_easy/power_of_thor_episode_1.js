/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
var x = initialTX
var y = initialTY
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    deltaY = lightY - y
    deltaX = lightX - x
    let dir = ""
    if(lightY - y !== 0){
        dir = dir + (deltaY < 0 ? "N" : "S" )
        y += (deltaY < 0 ? -1 : 1 )
    }
    if(deltaX !== 0){
        dir = dir + (deltaX < 0 ? "W" : "E" )
        x += (deltaX < 0 ? -1 : 1 )
    }
    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(dir);
}