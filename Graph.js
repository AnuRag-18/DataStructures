class Graph{
    constructor(){
        this.ajacencyList={};
    }
    addVertex(vertex){
        if(!this.ajacencyList[vertex]){
            this.ajacencyList[vertex]= [];
        }
    }
    addEdge(v1,v2){
         this.ajacencyList[v1].push(v2);
         this.ajacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.ajacencyList[vertex1]=this.ajacencyList[vertex1].filter(
            v=>v!==vertex2
        );
        this.ajacencyList[vertex2]=this.ajacencyList[vertex2].filter(
            v=>v!==vertex1
        );
        
    }
    removeVertex(vertex){
        while(this.ajacencyList[vertex].length){
            const adjacentVertex = this.ajacencyList[vertex].pop();
            this.removeEdge(adjacentVertex,vertex);
        }
        delete this.ajacencyList[vertex];
    }
    depthFirstSearchRecursive(start){
        var result = [];
        var visited = {};
        var ajacencyList = this.ajacencyList;
        (function dfs(vertex){
           if(!vertex) return null;
           visited[vertex]=true ;
           result.push(vertex);
           ajacencyList[vertex].forEach(neighbour =>{
               if(!visited[neighbour]){
                   return dfs(neighbour);
               }

           });
        })(start);
        return result;
    }
    depthFirstSearchIterative(start){
        var stack = [start];
        var result = [];
        var visited = {};
        visited[start] = true;
        
        var currenVertex;
        while(stack.length){

            currenVertex = stack.pop();
            result.push(currenVertex);
            this.ajacencyList[currenVertex].forEach(neighbour=>{
               if(!visited[neighbour]){
                   visited[neighbour] = true ;
                   stack.push(neighbour);
               }
            });

        }
        return result;
    }
    breathFirstSearch(start){
        var queue = [start];
        var result = [];
        var visited = {};
        visited[start] = true;
        var currenVertex;

        while(queue.length){
            currenVertex = queue.shift();
            result.push(currenVertex);
            this.ajacencyList[currenVertex].forEach(neighbour=>{
               if(!visited[neighbour]){
                   visited[neighbour]= true;
                   queue.push(neighbour);
               }
            });
        }
        return result;
    }
}
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g);
console.log(g.depthFirstSearchRecursive("A"));
console.log(g.depthFirstSearchIterative("A"));
console.log(g.breathFirstSearch("A"));

