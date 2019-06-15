/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var min = 99999
for (let i = 0; i < n; i++) {
    let t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    min = (Math.abs(t) <= Math.abs(min) ? (Math.abs(t) == Math.abs(min) ? Math.max(t, min) : t ): min)
}

// Write an action using print()
// To debug: printErr('Debug messages...');

print(min == 99999 ? 0 : min);