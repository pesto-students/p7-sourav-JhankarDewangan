// Given the root of a binary tree, return its maximum depth.A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node.

// Example 1:Input: root = [3,9,20,null,null,15,7]Output: 3Example 2:Input: root = [1,null,2]Output: 2Constraints:●The number of nodes in the tree is in the range [0, 104].●100 <= Node.val <= 100

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function insertIntoTree(i, arr) {
    let curr = null;
    if (i < arr.length) {
      curr = new TreeNode(arr[i]);
      curr.left = insertIntoTree(2 * i + 1, arr);
      curr.right = insertIntoTree(2 * i + 2, arr);
    }
    return curr;
  }
  
  function createTree(arr) {
    return insertIntoTree(0, arr);
  }
  
  function calculateDepth(root) {
    if (root === null) {
      return 0;
    }
  
    let leftHeight = calculateDepth(root.left);
    let rightHeight = calculateDepth(root.right);
  
    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
  
  const root1 = createTree([3, 9, 20, null, null, 15, 7]);
  console.log(calculateDepth(root1)); // 3
  
  const root2 = createTree([1, null, 2]);
  console.log(calculateDepth(root2)); // 2
