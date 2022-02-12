export function combinationSum(candidates, target) {
    const result = [];

    function dfs(currentIndex, currentCombo, currentTotal) {
        if (currentTotal === target) {
            result.push([...currentCombo]);
            return;
        }

        if (currentIndex >= candidates.length || currentTotal > target) {
            return;
        }

        dfs(currentIndex, [...currentCombo, candidates[currentIndex]], currentTotal + candidates[currentIndex]);
        dfs(currentIndex + 1, currentCombo, currentTotal);
    }

    dfs(0, [], 0);
    return result;
}
