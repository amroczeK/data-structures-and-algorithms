/**
 * We define a generic DoublyNode class with a value of type T, 
 * a next property, and a prev property. Both next and prev can be 
 * another DoublyNode or null if it's the first/last element in the list.
 */
class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null;
  prev: DoublyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * The DoublyLinkedList class is also generic with type T and has properties 
 * head, tail, and length. The head is the first element in the list, and the 
 * tail is the last element. Both can be null if the list is empty.
 */
class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // The add method creates a new node and appends it to the end of the list.
  // It also updates the prev and next properties of the affected nodes.
  add(value: T): void {
    const newNode = new DoublyNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // The remove method looks for a node with a given value and removes it if found. 
  // It returns true if the node was removed and false otherwise. It also updates 
  // the prev
  remove(value: T): boolean {
    if (this.head === null) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head !== null) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return true;
    }

    let current = this.head.next;

    while (current !== null) {
      if (current.value === value) {
        current.prev!.next = current.next;
        if (current.next !== null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.length--;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(value: T): DoublyNode<T> | null {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  size(): number {
    return this.length;
  }
}
