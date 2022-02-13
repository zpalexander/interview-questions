/**
 * frankenzombie.js
 *
 * Write a function that takes a list of pairs `[start, end]` and returns the
 * total number of hours that Frankenzombie was monitored. All values `start` and `end`
 * are greater than zero and no greater than 2^30-1. `end` will always be greater than `start`.
 */

/* Logic */
export function totalTime(timecards) {
    // Sort time cards in order of start time
    timecards.sort((a, b) => a[0] - b[0]);

    let total = 0;
    let maxPrev = 0;


    for (let i = 0; i < timecards.length; i++) {
        let item = timecards[i];
        let start = item[0];
        let end = item[1];

        if (start < maxPrev) {
            start = maxPrev;
        }

        let duration = end - start;

        if (duration > 0) {
            total += duration;
            maxPrev = end;
        }
    }

    return total;
}



