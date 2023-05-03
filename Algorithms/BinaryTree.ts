/**
 * We define a TreeNode class to represent the individual nodes in the tree. 
 * Each node has a value, and two child references, left and right.
 */
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * We define the BinaryTree class, which will store the root node of the tree 
 * and provide methods to insert values.
 * 
 * Inside the BinaryTree class, we have a constructor that initializes the root to 
 * null, meaning the tree is empty when created.
 */
class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  /**
   * The insert method is used to add a value to the tree. If the tree is empty
   * (root is null), we create a new node with the given value and set it as the
   * root. Otherwise, we call the private helper function insertNode to insert
   * the value into the appropriate position in the tree.
   */
  insert(value: number): void {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.insertNode(this.root, value);
    }
  }

  /**
   * The insertNode method is a recursive function that checks if the value should
   * be inserted to the left or right of the current node. If the value is less than
   * the current node's value, it should go to the left. If the left child exists,
   * we call the insertNode method again with the left child as the current node.
   * If the left child doesn't exist, we create a new node with the value and set
   * it as the left child. The process is similar for the right side.
   */
  private insertNode(node: TreeNode, value: number): void {
    if (value < node.value) {
      if (node.left) {
        this.insertNode(node.left, value);
      } else {
        node.left = new TreeNode(value);
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, value);
      } else {
        node.right = new TreeNode(value);
      }
    }
  }

  // search takes a value as an input and returns the corresponding node if found,
  // or null if not found.
  search(value: number): TreeNode | null {
    return this.searchNode(this.root, value);
  }

  // Helper function to recursively search for a value in the tree
  private searchNode(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }

  // Delete that takes a value as an input and removes the node with that value 
  // if it exists.
  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  // Helper function to recursively delete a value from the tree
  private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.value = this.findMinNode(node.right).value;
        node.right = this.deleteNode(node.right, node.value);
      }
    }

    return node;
  }

  // Helper function to find the node with the minimum value
  private findMinNode(node: TreeNode | null): TreeNode | null {
    if (!node) {
      return null;
    }

    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // In-order traversal
  inOrder(): void {
    this.inOrderTraverse(this.root);
  }

  // Helper function for in-order traversal
  private inOrderTraverse(node: TreeNode | null): void {
    if (node) {
      this.inOrderTraverse(node.left);
      console.log(node.value);
      this.inOrderTraverse(node.right);
    }
  }
}

const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);