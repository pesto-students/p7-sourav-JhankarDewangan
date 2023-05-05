// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive). The edges in the graph are represented as a 2D integer array edges,
// where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertexvi. Every vertex pair is connected by at most one edge, and no vertex has an edge toitself.You want to determine if there is a valid path that exists from vertex source to vertexdestination.Given edges and the integers n, source, and destination, return true if there is a validpath from source to destination, or false otherwise.Example 1:Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2Output: trueExplanation: There are two paths from vertex 0 to vertex 2:- 0 → 1 → 2- 0 → 2

function createGraph(vertices, edges) {
    const adjacencyList = Array(vertices)
      .fill(0)
      .map(() => Array());
  
    edges.forEach((edge) => {
      const parent = edge[0];
      const child = edge[1];
  
      adjacencyList[parent].push(child);
      adjacencyList[child].push(parent);
    });
  
    return adjacencyList;
  }
  
  function isPathExist(graph, source, destination) {
    let queue = [source];
    const visited = [];
    visited[source] = true;
  
    while (queue.length) {
      const v = queue.shift();
      for (const vertex of graph[v]) {
        if (vertex == destination) {
          return true;
        }
        if (!visited[vertex]) {
          queue.push(vertex);
          visited[vertex] = true;
        }
      }
    }
  
    return false;
  }
  
  const graph = createGraph(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ]);
  console.log(isPathExist(graph, 0, 2)); // true
  // Explanation: There are two paths from vertex 0 to vertex 2
  // - 0 → 1 → 2
  // - 0 → 2
  
  const graph1 = createGraph(6, [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ]);
  console.log(isPathExist(graph1, 0, 5)); // false
  // Explanation: There is no path from vertex 0 to vertex 5.