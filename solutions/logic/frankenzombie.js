/**
 * frankenzombie.js
 *
 * Write a function that takes a list of pairs `[start, end]` and returns the
 * total number of hours that Frankenzombie was monitored. All values `start` and `end`
 * are greater than zero and no greater than 2^30-1. `end` will always be greater than `start`.
 */

export function totalTime(list) {
    // Initialize working variables
    let total = 0;
    let mergedSortedTimecards = mergeTimecards(list.sort(compareTimecards));

    mergedSortedTimecards.forEach((timespan) => {
        total += (parseInt(timespan[1]) - parseInt(timespan[0]));
    });

    return total;
}


function mergeTimecards(sortedList) {
    let mergedList = [];
    mergedList.push(sortedList.shift());

    while (sortedList.length > 0) {
        let timecard = sortedList.shift();
        let latestMerge = mergedList[mergedList.length - 1];
        if (timecard[0] >= latestMerge[0] && timecard[0] <= latestMerge[1]) {
            let mergedTimecards = [
                getMinVal(timecard[0], latestMerge[0]),
                getMaxVal(timecard[1], latestMerge[1])
            ];
            mergedList.shift();
            mergedList.push(mergedTimecards);
        } else {
            mergedList.push(timecard);
        }
    }

    return mergedList;
}


function mergeOverlappingTimes(a, b) {
    return [a[0], b[1]];
}


function compareTimecards(a, b) {
    if (a[0] < b[0]) {
        return -1;
    } else if (a[0] > b[0]) {
        return 1;
    } else {
        return 0;
    }
}

function getMinVal(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function getMaxVal(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
