# Data Structures and Algorithms
Implementations of Data Structures and Algorithms in TypeScript.

## Executing the files
1. Install the required dependencies
```
npm install -g typescript
npm install -g ts-node
```

2. Run the `ts-node` command on the file
```
ts-node Algorithms/QuickSort.ts 
```

Useful Links/Resources
======================

*   [https://www.youtube.com/watch?v=RcvQagxK\_9w](https://www.youtube.com/watch?v=RcvQagxK_9w)

  

Data Structures
===============

Stack
-----

A stack is a collection of elements, with two main operations: pushing an element onto the stack, and popping it off. The elements are stored in a **last-in, first-out (LIFO) order**.

  

A stack is a linear data structure that follows the **LIFO (Last-In-First-Out)** principle and only has one end. A **stack** is an abstract data type that serves as a collection of elements, with two principal operations:

*   **push**, which adds an element to the collection, and
*   **pop**, which removes the most recently added element that was not yet removed.

  

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

  

![](https://t9003089730.p.clickup-attachments.com/t9003089730/c58e7a38-5d02-422d-9270-13dc32c38df8/image.png)

```typescript
class Stack<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.pop();
  }
}
```

  

Queue
-----

A **queue** is a data structure that stores elements in a linear fashion, where we can add elements to the end (**enqueue**) and remove elements from the front (**dequeue**), like a real-life queue.

  

A **queue** is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principle (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.

  

This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.

  

![](https://t9003089730.p.clickup-attachments.com/t9003089730/b10b08d6-9a6c-46fd-8b3d-47083412b5ec/image.png)

```typescript
class Queue<T> {
  _store: T[] = [];
  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.shift();
  }
}
```

  

Linked Lists
------------

A linked list is a collection of “nodes” connected together via links. These nodes consist of the data to be stored and a pointer to the address of the next node within the linked list. In the case of arrays, the size is limited to the definition, but in linked lists, there is no defined size. Any amount of data can be stored in it and can be deleted from it.

  

*   **Singly Linked List** − The nodes only point to the address of the next node in the list.
*   **Doubly Linked List** − The nodes point to the addresses of both previous and next nodes.
*   **Circular Linked List** − The last node in the list will point to the first node in the list. It can either be singly linked or doubly linked.

  

### Singly Linked List

A singly linked list is a data structure that consists of elements called nodes, where each node points to the next node in the sequence. It is called "singly" because each node has a single reference to the next node.

  

We will create a SinglyLinkedList class in TypeScript with the following features:

1.  A `Node` class to represent each element in the list
2.  `length` property to keep track of the list size
3.  `head` property to keep track of the first element in the list
4.  `add` method to add a new node at the end of the list
5.  `remove` method to remove a node by its value
6.  `find` method to find a node by its value
7.  `toArray` method to convert the list into an array for easy inspection

### Doubly Linked List

A doubly linked list is similar to a singly linked list, but each node has two references: one to the next node and another to the previous node. This allows traversing the list in both directions.

Hash Table
----------

A **hash table** (hash map) is a data structure which implements an _associative array_ abstract data type, a structure that can _map keys to values_. A hash table uses a _hash function_ to compute an index into an array of buckets or slots, from which the desired value can be found.

  

Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way, can be resolved by separate chaining.

  

![](https://t9003089730.p.clickup-attachments.com/t9003089730/ff720a41-db3e-44ef-bfc2-acb700852044/image.png)

![](https://t9003089730.p.clickup-attachments.com/t9003089730/f47551db-6c7f-40fa-a9a1-58f3284584b5/image.png)

  

Tree
----

A **tree** is a widely used abstract data type (ADT) — or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

  

A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

  

A simple unordered tree; in this diagram, the node labeled 7 has two children, labeled 2 and 6, and one parent, labeled 2. The root node, at the top, has no parent.

  

[![](https://github.com/trekhleb/javascript-algorithms/raw/master/src/data-structures/tree/images/tree.jpeg)](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/images/tree.jpeg)

Binary Search Tree
------------------

**Reference:** [https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)

  

A Binary Search Tree (BST) is a tree data structure in which each node has at most two children, called left and right child. The key property of a Binary Search Tree is that the value of a node's left child is less than or equal to the value of the node itself, and the value of its right child is greater than or equal to the node's value. This ordering property ensures that a binary search can be run efficiently on the BST.

  

A **binary search trees** (BST), sometimes called ordered or sorted binary trees, are a particular type of container: data structures that store "items" (such as numbers, names etc.) in memory. They allow fast lookup, addition and removal of items, and can be used to implement either dynamic sets of items, or lookup tables that allow finding an item by its key (e.g., finding the phone number of a person by name).

  

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees.

  

On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

  

A Binary Search Tree provides an efficient way to store and retrieve data in a sorted order. Its average-case time complexity for search, insertion, and deletion operations is O(log n), where n is the number of nodes in the tree. However, in the worst case, when the tree becomes unbalanced and degenerates into a linked list, the time complexity can degrade to O(n). To avoid this, there are self-balancing Binary Search Trees, such as AVL trees and Red-Black trees, which maintain a balanced structure to ensure optimal performance.

  

### Complexities

#### Time Complexity

| Access | Search | Insertion | Deletion |
| ---| ---| ---| --- |
| <br>O(log(n))<br> | <br>O(log(n))<br> | <br>O(log(n))<br> | <br>O(log(n))<br> |

#### Space Complexity

O(n)

  

![](https://t9003089730.p.clickup-attachments.com/t9003089730/b4583dd6-7549-4570-85a7-c2ce7d345027/image.png)

Graph
-----

A graph is a data structure that represents the relationship between different objects, often called nodes or vertices. Imagine a group of friends where each person is a node, and their friendships are the connections (also called edges) between them. A graph helps us visualize and work with such relationships.

  

There are two main types of graphs:

1.  **Undirected Graph:** The connections between nodes don't have a direction, meaning if node A is connected to node B, then node B is also connected to node A. An example would be Facebook friendships, where if you are friends with someone, they are also friends with you.
2.  **Directed Graph:** The connections between nodes have a direction. If node A is connected to node B, it doesn't mean node B is connected to node A. An example would be Twitter followers, where if you follow someone, they don't necessarily follow you back.

[![](https://github.com/trekhleb/javascript-algorithms/raw/master/src/data-structures/graph/images/graph.jpeg)](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/images/graph.jpeg)

![](https://t9003089730.p.clickup-attachments.com/t9003089730/257ee90d-4fca-4678-8072-4e1694505221/image.png)![](https://t9003089730.p.clickup-attachments.com/t9003089730/6aadc944-1834-4541-af6b-fd4ba28a75f9/image.png)

```plain
const graph: Map<string, string[]> = new Map<string, string[]>([
  ['A', ['B', 'C']],
  ['B', ['A', 'D', 'E']],
  ['C', ['A', 'E']],
  ['D', ['B']],
  ['E', ['B', 'C']],
]);
```

  

* * *

  

Algorithms
==========

Binary Search
-------------

Binary Search is an efficient algorithm for finding a specific element in a sorted array. It works by repeatedly dividing the array into two halves - one with elements smaller than the target, and the other with elements larger than the target. It then narrows down the search by only considering the half that may contain the target element. This process continues until the desired element is found or until the search space becomes empty.

  

The time complexity of the binary search algorithm is O(log n). The best-case time complexity would be O(1) when the central index would directly match the desired value.

  

**NOTE:** Binary Search only works with sorted arrays, so it's essential to sort the array using **Quick Sort** or any other sorting algorithm before performing the search.

  

Quick Sort
----------

Quick Sort is a widely used, efficient sorting algorithm that works based on the "divide and conquer" approach. It sorts a list or an array of elements by selecting a "pivot" element and then partitioning the elements into two smaller groups:

1.  Elements less than or equal to the pivot
2.  Elements greater than the pivot

  

Quick Sort then recursively applies the same process to the two smaller groups until the entire list is sorted.

  

Here's a high-level overview of the Quick Sort algorithm:

1.  Choose a pivot element from the list. The choice of pivot can impact the algorithm's performance; common strategies include selecting the first, last, middle, or a random element.
2.  Partition the list into two groups based on the pivot: one group with elements less than or equal to the pivot and another group with elements greater than the pivot.
3.  Recursively apply Quick Sort to both groups.
4.  Combine the two groups (now sorted) with the pivot in between.

  

Let's go through an example to better understand the process. Suppose we have the following list of numbers:

```plain
8, 3, 5, 1, 7, 4, 6
```

We'll choose the first element as the pivot (8). After partitioning the list based on the pivot, we get:

```plain
[3, 5, 1, 7, 4, 6] and [8]
```

Now, we apply Quick Sort recursively to both groups:

```plain
[3, 5, 1, 7, 4, 6] -> [1, 3, 4, 5, 6, 7][8] -> [8]
```

Finally, we combine the two sorted groups and the pivot:

```plain
[1, 3, 4, 5, 6, 7, 8]
```

The list is now sorted. Note that the choice of pivot and the order of elements in the original list can impact the algorithm's performance. In the best and average cases, Quick Sort has a time complexity of O(n log n), where n is the number of elements. However, in the worst case (already sorted list with a poorly chosen pivot), the time complexity can be O(n^2).

  

  

Merge Sort
----------

Merge Sort is an efficient sorting algorithm that uses the "divide and conquer" strategy. It works by dividing a list or an array of elements into smaller parts, sorting them independently, and then merging the sorted parts to create a fully sorted list.

  

Here's a high-level overview of the Merge Sort algorithm:

1.  Divide the list into two equal halves.
2.  Recursively apply Merge Sort to both halves.
3.  Merge the two sorted halves to create a fully sorted list.

  

The key to the Merge Sort algorithm is the "merge" step, which combines two sorted lists into a single sorted list. This step is performed in linear time, meaning it takes O(n) time, where n is the total number of elements in the two lists.

  

Let's go through an example to better understand the process. Suppose we have the following list of numbers:

```plain
5, 1, 8, 3, 6, 4, 7
```

First, we divide the list into two halves:

```plain
[5, 1, 8] and [3, 6, 4, 7]
```

Now, we recursively apply Merge Sort to both halves:

```plain
[5, 1, 8] -> [1, 5, 8][3, 6, 4, 7] -> [3, 4, 6, 7]
```

Finally, we merge the two sorted halves:

```plain
[1, 5, 8] and [3, 4, 6, 7] -> [1, 3, 4, 5, 6, 7, 8]
```

The list is now sorted. Merge Sort has a time complexity of O(n log n) in the best, average, and worst cases, where n is the number of elements. This makes it a reliable and efficient sorting algorithm for various applications. However, it often requires additional space for the merging process, which can be a disadvantage compared to some in-place sorting algorithms like Quick Sort.

  

  

Breadth First Search
--------------------

Breadth First Search (BFS) is a graph traversal algorithm that explores all the nodes of a graph in a layer-by-layer manner. Imagine you're trying to explore a maze, and you want to visit all the rooms. BFS allows you to visit all the rooms in the order of their distance from your starting point.

  

Here's how the BFS algorithm works:

1.  Start at the initial node (or the starting point).
2.  Visit all the neighbours of the starting node.
3.  For each neighbour, visit all of its neighbours that haven't been visited yet.
4.  Repeat step 3 until all the nodes in the graph have been visited.

  

During the traversal process, BFS uses a queue data structure to keep track of the nodes to visit. The queue ensures that we visit nodes in the order they are discovered.

  

Let's use the following graph as an example:

```plain
A -- B -- D
|    |
C -- E
```

  

If we start at node A and apply the BFS algorithm, the traversal order would be: A, B, C, D, E.

Here's a step-by-step explanation of the process:

1.  Start at node A, mark it as visited, and add its neighbours (B and C) to the queue.
2.  Dequeue the first node in the queue (B), mark it as visited, and add its unvisited neighbours (D and E) to the queue.
3.  Dequeue the next node in the queue (C), mark it as visited, and add its unvisited neighbours (none) to the queue.
4.  Dequeue the next node in the queue (D), mark it as visited, and add its unvisited neighbours (none) to the queue.
5.  Dequeue the last node in the queue (E), mark it as visited, and add its unvisited neighbours (none) to the queue.

  

At this point, the queue is empty, and we've visited all the nodes in the graph.

  

Depth First Search
------------------

Depth First Search (DFS) is a graph traversal algorithm that explores the nodes of a graph by visiting a node and then recursively exploring its neighbors as deep as possible before backtracking. In other words, it goes as deep as it can along a path before going back to explore other paths.

Imagine you're exploring a treehouse with multiple levels and branches. DFS would be like climbing all the way to the top of one branch, then climbing down and moving to the next branch, and so on.

Here's how the DFS algorithm works:

1.  Start at the initial node (or the starting point).
2.  Visit the node and mark it as visited.
3.  For each neighbour of the current node that hasn't been visited, recursively apply the DFS algorithm.
4.  If there are no more unvisited neighbours, backtrack (return) to the previous node and continue the process.

Let's use the following graph as an example:

```plain
A -- B -- D
|    |
C -- E
```

If we start at node A and apply the DFS algorithm, one possible traversal order would be: A, B, D, E, C.

Here's a step-by-step explanation of the process:

1.  Start at node A, mark it as visited, and recursively apply the DFS algorithm on its first neighbour (B).
2.  Visit node B, mark it as visited, and recursively apply the DFS algorithm on its first neighbour (D).
3.  Visit node D, mark it as visited, and since it has no unvisited neighbours, backtrack to node B.
4.  At node B, move to the next unvisited neighbour (E), mark it as visited, and recursively apply the DFS algorithm on it.
5.  Visit node E, mark it as visited, and recursively apply the DFS algorithm on its only unvisited neighbour (C).
6.  Visit node C, mark it as visited, and since it has no unvisited neighbours, backtrack to E, then B, then A.

At this point, we've visited all the nodes in the graph using the DFS algorithm. Note that the traversal order might be different depending on the order in which neighbours are visited.

  

  

Fibonacci Sequence and Memoization
==================================

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, and so on.

  

Memoization
-----------

Memoization is a technique where we store the results of expensive function calls and return the cached result when the same inputs occur again. This helps us save time and resources, as we don't need to compute the result every time the function is called with the same input. So, when you call the `fibonacci` function with the same input multiple times, it will return the result from the cache instead of recalculating it.

  

===

Quiz
====

Palindrome
----------

A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.

```typescript
function isPalindrome(str:string) {
  return str.split('').reverse().join('') === str;
}
```

  

Reverse String
--------------

JavaScript `string` doesn't have a `reverse` method. But you can just use the `Array.prototype.reverse` method.

```typescript
function reverse(str:string) {
  return str.split('').reverse().join('');
}
```