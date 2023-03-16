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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;
    if (!root.left && !root.right) return true;

    type node = TreeNode | null;

    function check(left: node, right: node): boolean {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;

        return check(left.left, right.right) && check(left.right, right.left);
    }

    return check(root.left, root.right);
}
