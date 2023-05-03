type Graph = Map<string, string[]>;

class GraphTraversal {
  private visited: Set<string>;

  constructor() {
    this.visited = new Set<string>();
  }

  dfs(graph: Graph, startNode: string): void {
    this.visited.add(startNode);
    console.log(startNode);

    const neighbors = graph.get(startNode);

    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!this.visited.has(neighbor)) {
          this.dfs(graph, neighbor);
        }
      }
    }
  }

  bfs(graph: Graph, startNode: string): void {
    const queue: string[] = [startNode];
    this.visited = new Set<string>([startNode]);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode) {
        console.log(currentNode);

        const neighbors = graph.get(currentNode);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!this.visited.has(neighbor)) {
              this.visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
}

const graph: Graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D", "E"]],
  ["C", ["A", "F"]],
  ["D", ["B"]],
  ["E", ["B", "F"]],
  ["F", ["C", "E"]],
]);

const graphTraversal = new GraphTraversal();
console.log("DFS:");
graphTraversal.dfs(graph, "A");
console.log("BFS:");
graphTraversal.bfs(graph, "A");
