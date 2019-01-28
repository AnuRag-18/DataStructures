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
}
let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");
g.removeVertex("Los Angeles");
console.log(g);
