const Vertex = (node, distanceFromStart) => ({
    node,
    distanceFromStart,
});


export function getNDegreesOfSeparation(startingPerson, targetId) {
    const visitedIds = [];
    const vertexQueue = [];
    vertexQueue.push(Vertex(startingPerson, 0));

    while (vertexQueue.length > 0) {
        const currentVertex = vertexQueue.shift();
        const currentNode = currentVertex.node;
        const currentDistanceFromStart = currentVertex.distanceFromStart;

        if (currentNode.getId() === targetId) {
            return currentDistanceFromStart;
        }

        visitedIds.push(currentNode.getId());

        for (let i = 0; i < currentNode.getFriends().length; i++) {
            const thisFriend = currentNode.getFriends()[i];
            if (visitedIds.includes(thisFriend.getId())) {
                continue;
            }

            vertexQueue.push(Vertex(thisFriend, currentDistanceFromStart + 1));
        }
    }

    return -1;
}
