/**
 * breadth-first-search.js
 *
 * Given a graph represented as an adjacency list
 * and the node to start with,
 * return an array of the graph's nodes in
 * breadth first order
 */
import Queue from '../../test/helpers/Queue';

export default function bfs(graph, source) {
    // Initialize working variables
    const output = [];
    const visited = [];
    const queue = Queue();
    let current;
    output.push(source);
    queue.enqueue(source);

    for (let i = 0; i < graph.length; i++) {
        visited.push(false);
    }

    // While the queue isn't empty, traverse
    while (!queue.isEmpty()) {
        current = queue.dequeue();
        visited[current] = true;
        graph[current].forEach((node) => {
            if (!visited[node]) {
                output.push(node);
                queue.enqueue(node);
                visited[node] = true;
            }
        });
    }

    return output;
}
