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
    let maxPreviousStart = 0;

    timecards.forEach(card => {
        const cardStart = card[0];
        const cardEnd = card[1];

        let start = cardStart;
        if (maxPreviousStart > cardStart) {
            start = maxPreviousStart;
        }

        total = total + (cardEnd - start);

        maxPreviousStart = cardEnd;
    });

    return total;
}



