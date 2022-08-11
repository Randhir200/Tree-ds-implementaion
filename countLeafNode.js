class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(4);
let node2 = new Node(6);
let node3 = new Node(7);
let node4 = new Node(8);
let node5 = new Node(9);
let node6 = new Node(10);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node5.left = node6;

//       node
//      /    \
//    node    node
//   /   \
// node   node
//         \
//          node
// console.log(root);

let count = 0;
countLeaf(root);
console.log(`Total leaf nodes ${count} `);
function countLeaf(root) {
  if (root == null) return;
  if (root.left == null && root.right == null) {
    console.log(root.data);
    count++;
    return 1;
  }
  countLeaf(root.left);
  countLeaf(root.right);
}
