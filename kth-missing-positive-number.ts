function findKthPositive(arr: number[], k: number) {
    /*     let i = 0;
    let count = 1;

    while (k) {
        if (count !== arr[i]) k -= 1;
        if (count === arr[i]) i += 1;
        count += 1;
    }

    return count - 1; */

    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (arr[mid] - 1 - mid < k) l = mid + 1;
        else r = mid - 1;
    }
    return l + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // 6
