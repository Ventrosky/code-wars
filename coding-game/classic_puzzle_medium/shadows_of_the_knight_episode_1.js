/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

var y = Y0;
var x = X0;

var minX = -1, maxX = W
var minY = -1, maxY = H
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    
    let delta = 0
    if (bombDir.includes("U")) {
        maxY = y 
        delta = Math.floor((maxY - minY) / 2)
        y = maxY - delta
    } else if (bombDir.includes("D")) {
        minY = y
        delta = Math.floor((maxY  - minY) / 2)
        y = minY + delta
    }

    if (bombDir.includes("L")) {
        maxX = x 
        delta = Math.floor((maxX - minX) / 2)
        x = maxX - delta
        
    } else if (bombDir.includes("R")) {
        minX = x 
        delta = Math.floor((maxX - minX) / 2)
        x = minX + delta
    }
    
    // the location of the next window Batman should jump to.
    print(x + " " + y);
}