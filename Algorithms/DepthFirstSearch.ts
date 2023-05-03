/**
 * In this implementation, we start by defining a GraphNode interface, 
 * which represents a node in the graph. Each node has a value property 
 * to store its value, a visited property to track whether it has been 
 * visited during the traversal, and a neighbors property to store its 
 * neighboring nodes.
 * 
 * Then, we define the depthFirstSearch function, which takes a GraphNode 
 * as its input and returns nothing (void). The function starts by marking 
 * the input node as visited and logging its value to the console. 
 * Then, it loops through each neighboring node and recursively calls 
 * depthFirstSearch on any neighbor that hasn't been visited yet.
 */
interface GraphNode {
  value: string;
  visited: boolean;
  neighbors: GraphNode[];
}

function depthFirstSearch(node: GraphNode): void {
  node.visited = true;
  console.log(node.value);

  for (const neighbor of node.neighbors) {
    if (!neighbor.visited) {
      depthFirstSearch(neighbor);
    }
  }
}

const nodeA: GraphNode = { value: "A", visited: false, neighbors: [] };
const nodeB: GraphNode = { value: "B", visited: false, neighbors: [] };
const nodeC: GraphNode = { value: "C", visited: false, neighbors: [] };
const nodeD: GraphNode = { value: "D", visited: false, neighbors: [] };
const nodeE: GraphNode = { value: "E", visited: false, neighbors: [] };

nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeD, nodeE];
nodeC.neighbors = [nodeE];

depthFirstSearch(nodeA);
