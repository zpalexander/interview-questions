export function courseSchedule(numCourses, prerequisites) {
    // The schedule is a directed graph

    // When would the course schedule be invalid?
    // Circular dependencies aka cycle in the graph


    // First build an adjacency hashmap
    const prerequisiteMap = {};
    const visitedSet = {};

    // Instantiate an empty dependency list for each course to start
    for (let courseNumber = 0; courseNumber < numCourses; courseNumber++) {
        prerequisiteMap[`${courseNumber}`] = [];
        visitedSet[`${courseNumber}`] = false;
    }

    // Then go through all prerequisites in the list and fill in prerequisites in the map
    prerequisites.forEach(prerequisitePair => {
        const course = prerequisitePair[0];
        const prerequisite = prerequisitePair[1];
        prerequisiteMap[`${course}`].push(prerequisite)
    });

    // Now we want to depth first search through each node
    // to the starting courses, and then from there recursively make sure
    // that each course is valid and can be completed
    function dfsHelper(courseNumber) {
        if (visitedSet[`${courseNumber}`] === true) {
            return false;
        }

        if (prerequisiteMap[`${courseNumber}`].length === 0) {
            return true;
        }

        visitedSet[`${courseNumber}`] = true;

        const coursePrerequisites = prerequisiteMap[`${courseNumber}`];

        for (let i = 0; i < coursePrerequisites.length; i++) {
            if (!dfsHelper(coursePrerequisites[i])) {
                return false;
            }

            visitedSet[`${courseNumber}`] = false;
            prerequisiteMap[`${courseNumber}`] = [];
            return true;
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfsHelper(i)) {
            return false;
        }
    }

    return true;
}

