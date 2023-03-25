function minReorder(n: number, connections: number[][]): number {
    type city = {
        in: number[];
        out: number[];
    }

    let reroute = 0;
    let map = new Map<number, city>();
    let visit: boolean[] = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        map.set(i, { in: [], out: [] })
    }

    for (let [a, b] of connections) {
        let aout = map.get(a);
        aout?.out.push(b);
        let bin = map.get(b);
        bin?.in.push(a)
    }


    let stack: number[] = [0];

    while (stack.length > 0) {
        let cCity = stack.pop()!
        visit[cCity] = true
        let cur = map.get(cCity)!
        let inArr = cur.in;
        let outArr = cur.out;

        for (let num of inArr) {
            if (!visit[num]) {
                stack.push(num)
            }
        }

        for (let num of outArr) {
            if (!visit[num]) {
                reroute += 1
                stack.push(num)
            }
        }

    }

    return reroute;
};


console.log(minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]])); // 3
console.log(minReorder(5, [[1, 0], [1, 2], [3, 2], [3, 4]])); // 2
console.log(minReorder(3, [[1, 0], [2, 0]])); // 0
