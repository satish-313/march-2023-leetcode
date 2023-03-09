class ListNode {
    val:number;
    next: ListNode | null
    constructor( val ?: number ,next ?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function detectCycle (head: ListNode | null) : ListNode | null {
    if ( !head || !head.next ) return null;

    let slow = head;
    let fast = head;

    do {
        if (!fast || !fast.next ) return null;
        slow = slow.next!;
        fast = fast.next.next!;
    } while (slow !== fast);

    while(slow !== head) {
        slow = slow.next!;
        head = head.next!;
    }

    return head;
}
