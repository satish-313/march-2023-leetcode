class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) return null;

    if (head.next === null) {
        return new TreeNode(head.val)
    }

    function contrustBST(
        leftNode: ListNode | null,
        rightNode: ListNode | null
    ) {
        if (leftNode === rightNode) return null;

        let slow: ListNode | null = leftNode;
        let fast: ListNode | null = leftNode;

        while (
            slow !== null &&
            fast !== rightNode &&
            fast !== null &&
            fast.next !== null &&
            fast.next !== rightNode
        ) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let root: TreeNode = new TreeNode(slow.val);

        root.left = contrustBST(leftNode, slow);
        root.right = contrustBST(slow.next, rightNode);
        return root;
    }

    return contrustBST(head, null);
}
