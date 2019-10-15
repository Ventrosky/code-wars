/*
Screen Locking Patterns
You might already be familiar with many smartphones that allow you to use a geometric pattern as a security measure. To unlock the device, you need to connect a sequence of dots/points in a grid by swiping your finger without lifting it as you trace the pattern through the screen. The image below has an example pattern of 7 dots/points: [A, B, I, E, D, G, C].
lock_example.png
For this kata, your job is to implement the function countPatternsFrom(firstPoint, length); where firstPoint is a single-character string corresponding to the point in the grid (i.e.: 'A') and length is an integer indicating the length of the pattern. The function must return the number of combinations starting from the given point, that have the given length.
Take into account that dots can only be connected with straight directed lines either:
horizontally (like A to B)
vertically (like D to G),
diagonally (like I and E, as well as B and I), or
passing over a point that has already been 'used' like (G and C passing over E).
The sample tests have some examples of the number of combinations for some cases to help you check your code.
Optional Extra:
Out of curiosity, in case you're wondering, for the Android lock screen, valid patterns must have between 4 and 9 dots, and there are 389112 possible valid combinations in total.
*/

class Graph {
    constructor(vertici){
      this.vtx = vertici;
      this.passOvr = new Map();
      this.adj = new Map(this.vtx.map(e => [ e, new Set() ]));
    }
    addEdge(v, w){
      this.adj.get(v).add(w);
    }
    addEdges(v, arrw){
      arrw.forEach((w)=>{
        this.addEdge(v,w);
      });
    }
    addEdgesOver(k,v){
      this.passOvr.set(k,v)
    }
    dfs(v, n, vis) {
      let visited = new Set(vis);
      visited.add(v);
      if(visited.size == n) {
        //console.log([...visited].join("->"));
        return 1;
      }
      let cnt = 0;
      let neighb = new Set([...this.adj.get(v)].map(e => {
          if(!visited.has(e)){
            return e;
          } else if (this.passOvr.has(v+e) && !visited.has(this.passOvr.get(v+e))) {
            return this.passOvr.get(v+e);
          }
          return null;
        }).filter(x=>x));
      neighb.forEach(e => {
          cnt += this.dfs(e,n,[...visited]);
      });
      return cnt;
    }
}
  
function initGraph(){
  let vertexs = ["A","B","C", "D","E","F","G","H","I"];
    let graph = new Graph(vertexs);
    graph.addEdges("A",["B","D","E", "F","H"]);
    graph.addEdges("B",["A", "D","E","F","C", "G", "I"]);
    graph.addEdges("C",["B", "E","F", "D","H"]);
    graph.addEdges("D",["A","B","E","G", "I", "H", "C"]);
    graph.addEdges("E",["A","B", "C","D","G","H","I","F"]);
    graph.addEdges("F",["C","B", "E", "H","I", "A", "G"]);
    graph.addEdges("G",["D", "E","H","B","F"]);
    graph.addEdges("H",["G","D","E","F","A","C","I"]);
    graph.addEdges("I",["H","E","F","D","B"]);
    graph.addEdgesOver("AB","C");
    graph.addEdgesOver("AE","I");
    graph.addEdgesOver("AD","G");
    graph.addEdgesOver("BE","H");
    graph.addEdgesOver("CB","A");
    graph.addEdgesOver("CE","G");
    graph.addEdgesOver("CF","I");
    graph.addEdgesOver("DE","F");
    graph.addEdgesOver("FE","D");
    graph.addEdgesOver("GD","A");
    graph.addEdgesOver("GH","I");
    graph.addEdgesOver("GE","C");
    graph.addEdgesOver("HE","B");
    graph.addEdgesOver("IH","G");
    graph.addEdgesOver("IE","A");
    graph.addEdgesOver("IF","C");
    return graph;
}
  
function countPatternsFrom(firstDot, length) {
    if (length <= 1) return length;
    let graph = initGraph();
    let res = graph.dfs(firstDot,length);
    return res;
}