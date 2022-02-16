export function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.hasOwnProperty(diff)) {
            return [map[diff], i];
        }

        map[nums[i]] = i;
    }
}
