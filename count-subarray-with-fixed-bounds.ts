function countSubarrays(nums: number[], minK: number, maxK: number): number {
    if (minK > maxK) return 0;

    let positionMinK = -1;
    let positionMaxK = -1;
    let leftBound = -1;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            leftBound = i;
            continue;
        }

        if (nums[i] === minK) positionMinK = i;
        if (nums[i] === maxK) positionMaxK = i;

        let start = Math.min(positionMaxK, positionMinK);
        res += Math.max(0, start - leftBound);
    }

    return res;
}

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // 2
console.log(
    countSubarrays(
        [
            35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315,
            171832, 945315, 35054, 109750, 790964, 441974, 552913,
        ],
        35054,
        945315
    )
); // 81
