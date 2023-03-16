class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const map = new Map<number, number>();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    type nodeType = TreeNode | null;

    function build(s: number, end: number): nodeType {
        if (s > end) return null;
        let val = postorder.pop();
        if (!val) return null;
        let idx = map.get(val);
        let node = new TreeNode(val);
        node.right = build(idx! + 1, end);
        node.left = build(s, idx! - 1);
        return node;
    }

    return build(0, inorder.length - 1);

}
