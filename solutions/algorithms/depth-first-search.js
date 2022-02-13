/**
 * depth-first-search.js
 * Given a graph represented as an adjacency list
 * and the node to start with,
 * return an array of the graph's nodes in
 * depth first order
 */

export default function dfs(inputGraph, inputSource) {
    const output = [];
    const visited = [];

    for (let i = 0; i < inputGraph.length; i++) {
        visited[i] = false;
    }

    function doDFS(graph, source) {
        output.push(source);
        visited[source] = true;
        for (let j = 0; j < graph[source].length; j++) {
            if (!visited[graph[source][j]]) {
                doDFS(graph, graph[source][j]);
            }
        }
    }

    doDFS(inputGraph, inputSource);

    return output;
}
