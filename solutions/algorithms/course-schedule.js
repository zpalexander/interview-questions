export function courseSchedule(numCourses, prerequisites) {
    const prerequisitesMap = {};
    const visitedSet = [];

    // Set up an adjacency map so we can see all required courses
    // for a given course.
    for (let courseNumber = 0; courseNumber < numCourses; courseNumber++) {
        prerequisitesMap[`${courseNumber}`] = [];
        visitedSet[courseNumber] = false;
    }

    for (let prerequisiteIndex = 0; prerequisiteIndex < prerequisites.length; prerequisiteIndex++) {
        const course = prerequisites[prerequisiteIndex][0];
        const prerequisite = prerequisites[prerequisiteIndex][1];
        prerequisitesMap[`${course}`].push(prerequisite);
    }


    // Now that we have each prerequisite mapped to its direct prerequisites
    // search through all courses in the graph to make sure that each one
    // can be completed based on whether or not its prerequisites can also
    // be completed

    function dfsHelper(course) {
        // Base Case #1:
        // If the course has already been visited, we have detected
        // a circular dependency, which means the schedule cannot be completed
        if (visitedSet[course] === true) return false;

        // Base Case #2:
        // If the course has no dependencies, we know it can always be
        // completed no matter what
        if (prerequisitesMap[`${course}`].length < 1) return true;

        // If we get to here it means the course has prerequisites, so we want
        // to mark the course as visited and search through its prerequisites
        // until we hit our base cases
        visitedSet[course] = true;
        const coursePrerequisites = prerequisitesMap[`${course}`];
        for (let prereqIndex = 0; prereqIndex < coursePrerequisites.length; prereqIndex ++) {
            if (!dfsHelper(coursePrerequisites[prereqIndex])) return false;
        }

        visitedSet[course] = false;
        prerequisitesMap[`${course}`] = [];
        return true;
    }

    for (let courseNumber = 0; courseNumber < numCourses; courseNumber++) {
        if (!dfsHelper(courseNumber)) return false;
    }

    return true;
}

