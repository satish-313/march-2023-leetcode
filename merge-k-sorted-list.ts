class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let a1 = new ListNode(1);
let a2 = new ListNode(4);
let a3 = new ListNode(5);

let b1 = new ListNode(1);
let b2 = new ListNode(3);
let b3 = new ListNode(4);

let c1 = new ListNode(2);
let c2 = new ListNode(6);

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists === null) return null;
    else if (lists.length === 0) return null;
    else if (lists.length === 1 && !lists[0]) return null;

    let nhead: ListNode = new ListNode(0);
    let res = nhead;
    let min = Infinity;
    let n = 0;

    for (let ln of lists) {
        min = Math.min(min, ln!.val);
        n += 1;
    }

    while (n) {
        let newmin = Infinity;

        for (let ln of lists) {
            while (ln?.val === min) {
                nhead.next = new ListNode(min);
                nhead = nhead.next;
                ln = ln.next;
                if (ln === null) {
                    n -= 1;
                    break;
                }
                if (ln?.val! > min) min = Math.min(newmin, ln?.val!);
            }
        }

        min = newmin;
    }

    return res.next;
}

console.log(mergeKLists([a1, b1, c1]));
console.log(mergeKLists([]));
