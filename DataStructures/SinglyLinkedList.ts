/**
 * We define a generic Node class with a value of type T and a next property, 
 * which can be another Node or null if it's the last element in the list.
 */
class SinglyNode<T> {
  value: T;
  next: SinglyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

/**
 * The SinglyLinkedList class is also generic with type T and has properties 
 * head and length. The head is the first element in the list and can be null 
 * if the list is empty.
 */
class SinglyLinkedList<T> {
  private head: SinglyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // The add method creates a new node and appends it to the end of the list.
  add(value: T): void {
    const newNode = new SinglyNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // The remove method looks for a node with a given value and removes it if found.
  // It returns true if the node was removed and false otherwise.
  remove(value: T): boolean {
    if (this.head === null) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return true;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current !== null) {
      if (current.value === value) {
        previous.next = current.next;
        this.length--;
        return true;
      }
      previous = current;
      current = current.next;
    }

    return false;
  }

  // The find method searches for a node with a given value and returns it if found, or null
  find(value: T): SinglyNode<T> | null {
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
