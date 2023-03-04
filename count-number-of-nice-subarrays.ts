function numberOfSubarrays(nums: number[], k: number): number {
    let left = 0;
    let noOfOdd = 0;
    let count = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) {
            noOfOdd += 1;
            if (noOfOdd >= k) {
                count += 1;
                while (!(nums[left++] % 2)) count += 1;
                total += count;
            }
        } else if (noOfOdd >= k) total += count;
    }
    return total;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // 2
console.log(numberOfSubarrays([2, 4, 6], 1)); // 0
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
