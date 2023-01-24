// Given the root of a binary tree, determine if it is a valid binary search tree (BST).A valid BST is defined as follows:The left subtree of a node contains only nodes with keys less than the node's key. Theright subtree of a node contains only nodes with keys greater than the node's key. Boththe left and right subtrees must also be binary search trees.
// Example 1:
// Input: root = [2,1,3]
// Output: trueExample


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
  
  function validateABinaryTree(root) {
    if (!root) {
      return true;
    }
  
    if (
      (root.left && root.value < root.left.value) ||
      (root.right && root.value > root.right.value)
    ) {
      return false;
    }
  
    return validateABinaryTree(root.left) && validateABinaryTree(root.right);
  }
  
  const root1 = createTree([2, 1, 3]);
  console.log(validateABinaryTree(root1)); // true
  
  const root2 = createTree([5, 1, 4, null, null, 3, 6]);
  console.log(validateABinaryTree(root2)); // false