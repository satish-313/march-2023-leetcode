function minJumps(arr: number[]): number {
    if (arr.length === 1) return 0;

    const len = arr.length;
    let cArr = new Array(arr.length).fill(false);
    cArr[0] = true;

    let queue: number[] = [0];
    let map = new Map<number, number[]>();
    let step = 0;

    for (let i = 0; i < len; i++) {
        if (map.has(arr[i])) {
            let t = map.get(arr[i]);
            t?.push(i);
            map.set(arr[i], t!);
        } else map.set(arr[i], [i]);
    }

    while (queue.length) {
        let nextq: number[] = [];

        for (let curIdx of queue) {
            if (curIdx === len - 1) return step;

            let curMap = map.get(arr[curIdx])!;
            curMap.push(curIdx + 1);
            curMap.push(curIdx - 1);

            for (let i of curMap) {
                if (i >= 0 && i < len && cArr[i] === false) {
                    nextq.push(i);
                    cArr[i] = true;
                }
            }
            map.set(arr[curIdx],[])
        }
        queue = nextq;
        step += 1;
    }

    return -1;
}

console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])); // 3
// console.log(minJumps([7])); // 0
// console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7])); // 1

/* function minJumps(arr: number[]): number {
    if (arr.length === 1) return 0;

    let cArr = new Array(arr.length).fill(-1);
    cArr[0] = 0;

    let queue: number[][] = [[0, arr[0]]];
    let map = new Map<number, number[]>();
    let step = 0;

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let t = map.get(arr[i]);
            t?.push(i);
            map.set(arr[i], t!);
        } else map.set(arr[i], [i]);
    }

    while (queue.length) {
        let newQueue: number[][] = [];
        step += 1;
        
        for (let [idx, value] of queue) {
            if (idx + 1 < arr.length && cArr[idx + 1] === -1) {
                newQueue.push([idx + 1, arr[idx + 1]]);
                cArr[idx + 1] = step;
                if (idx + 1 === arr.length - 1) return step;
            }

            if (idx - 1 >= 0 && cArr[idx - 1] === -1) {
                newQueue.push([idx - 1, arr[idx - 1]]);
                cArr[idx - 1] = step;
                if (idx - 1 === arr.length - 1) return step;
            }

            let v = map.get(value) as number[];
            for (let i of v) {
                if (cArr[i] === -1) {
                    newQueue.push([i, arr[i]]);
                    cArr[i] = step;
                    if (i === arr.length - 1) return step;
                }
            }
        }

        queue = newQueue;
    }

    return cArr[arr.length - 1];
}; */
