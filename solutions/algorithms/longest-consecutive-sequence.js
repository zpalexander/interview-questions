export function findLongestConsecutiveSequence(nums) {
    let longestSequence = 0;
    const numberMap = {};

    nums.forEach(num => {
        numberMap[num] = true;
    });

    nums.forEach(num => {
        if (numberMap[num - 1] !== undefined) return;

        let sequenceLength = 0;
        let n = num;
        while (numberMap[n] !== undefined) {
            sequenceLength++;
            n++;
        }

        longestSequence = Math.max(longestSequence, sequenceLength);
    });

    return longestSequence;
}
