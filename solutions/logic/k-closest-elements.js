export function kClosestElements(arr, k, x) {
    let topK = [];
    const topKDiffs = [];

    for (let i = 0; i < arr.length; i++) {
        const diff = Math.abs(x - arr[i]);

        if (topKDiffs.length < k) {
            topK.push(arr[i]);
            topKDiffs.push(diff);
        } else {
            for (let j = 0; j < k; j++) {
                if (topKDiffs[j] > diff) {
                    topKDiffs[j] = diff;
                    topK = arr[i];
                }
            }
        }
    }

    return topK;
}
