class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        // const newNode = new Node(value);
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left
            }
            else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {

                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
    
                    }

                } else if (currentNode.right.left === null) {
                    // 11. Solution remove() | 04:14

                    if (parentNode === null) {
                        this.root = current.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                } else {

                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left != null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = cuttent.left;
                    leftmost.right = current.right;

                    if (parentNode === null) {
                        this,root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
        return false;
    }
    // Iterative Approach
    breadthFirstSearch() {
        let currentNode = this.root;
        const list = [];
        const queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    // Recursive Approach
    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(5);
tree.insert(23);
tree.insert(69);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
console.log(tree.lookup(20));
console.log(JSON.stringify(traverse(tree.root)));
console.log("Breadth First Search Iterative:");
console.log(tree.breadthFirstSearch());
console.log("Breadth First Search Recursive:");
console.log(tree.breadthFirstSearchRecursive([tree.root], []));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

