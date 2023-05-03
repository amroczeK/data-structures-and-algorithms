/**
 * We're declaring a class named Queue, and it's a generic class with the 
 * type parameter T. This means it can store elements of any type 
 * (like numbers, strings, or even custom objects).
 * 
 * We create a private property called items of type T[] 
 * (an array of elements with type T). It's private, so it can only be 
 * accessed within the class.
 */
class Queue<T> {
  private items: T[];

  // This is the constructor method that initializes the items array
  // when a new Queue object is created.
  constructor() {
    this.items = [];
  }

  // This method adds an item to the end of the queue. It takes an item
  // of type T as an argument and returns nothing (void).
  enqueue(item: T): void {
    this.items.push(item);
  }

  // This method removes the item from the front of the queue and returns it.
  // If the queue is empty, it returns undefined.
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  // This method checks if the queue is empty and returns a boolean value
  // (true if the queue is empty, false otherwise).
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // This method returns the number of items in the queue as a number.
  size(): number {
    return this.items.length;
  }

  // This method returns the item at the front of the queue without removing it. 
  // If the queue is empty, it returns undefined.
  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
}
