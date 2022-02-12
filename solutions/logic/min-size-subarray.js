export function getMinSizeSubarray(target, nums) {
    let left = 0;
    let currentTotal = 0;
    let minRange = nums.length + 1;

    for (let right = 0; right < nums.length; right++) {
        currentTotal = currentTotal + nums[right];

        while (currentTotal >= target) {
            minRange = Math.min(minRange, right - left + 1);
            currentTotal = currentTotal - nums[left];
            left++;

        }
    }

    if (minRange === nums.length + 1) return 0;

    return minRange;
}
