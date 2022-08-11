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
  let node7 = new Node(22);
  let node8 = new Node(33);
  root.left = node2;
  root.right = node3;
  node2.left = node4;
  node2.right = node5;
  node5.left = node6;
  node6.left = node7;
  node7.left = node8;
  
  //       node
  //      /    \
  //    node    node
  //   /   \
  // node   node
  //         \
  //          node
  // console.log(root);
  
  let count = 0;
  console.log(`Total  hieghts ${heightOfTree(root)} `);
  function heightOfTree(root) {
    if (root == null) {
        // count++
        return 0;
    }    
    return 1 + Math.max(heightOfTree(root.left),heightOfTree(root.right));
  }
  