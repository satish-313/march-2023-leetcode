function dfs(i: number, visit: boolean[], map: Map<number, number[]>): void {
    visit[i] = true;
    let adj = map.get(i)!
    for (let num of adj) {
        if (!visit[num]) {
            dfs(num, visit, map)
        }
    }
}


function makeConnected(n: number, connections: number[][]): number {
    if (connections.length + 1 < n) return -1;

    let con: number = 0;
    let map = new Map<number, number[]>();
    let visit = new Array(n).fill(false)

    for (let i = 0; i < n; i++) {
        map.set(i, new Array());
    }

    for (let [a, b] of connections) {
        map.set(a, [...map.get(a)!, b])
        map.set(b, [...map.get(b)!, a])
    }

    for (let i = 0; i < n; i++) {
        if (!visit[i]) {
            con++;
            dfs(i, visit, map)
        }
    }

    return con - 1;
};


console.log(makeConnected(4, [[0, 1], [0, 2], [1, 2]])); // 1
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]])); // 2
console.log(makeConnected(6, [[0, 1], [0, 2], [0, 3], [1, 2]])); // -1
