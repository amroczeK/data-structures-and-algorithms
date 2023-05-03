/**
 * We define a class called Stack with a generic type parameter T. 
 * This means that our stack can hold items of any type, like numbers, 
 * strings, or even custom objects.
 * 
 * Inside the class, we declare a private array called items. 
 * This array will be used to store the elements in the stack. 
 * Since it's private, it can only be accessed within the class.
 */
class Stack<T> {
  private items: T[];

  // The constructor initializes the items array as an empty array.
  // This method is called when you create a new instance of the Stack class.
  constructor() {
    this.items = [];
  }

  // The push method takes an item of type T as an input and adds it to the end
  // of the items array. This represents adding an element to the top of the stack.
  push(item: T): void {
    this.items.push(item);
  }

  // The pop method removes the last element from the items array and returns it.
  // This represents removing the top element from the stack.
  // If the stack is empty, it returns undefined.
  pop(): T | undefined {
    return this.items.pop();
  }

  // The peek method returns the top element of the stack without removing it.
  // If the stack is empty, it returns undefined.
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // The isEmpty method checks if the stack is empty and returns a boolean value.
  // It's true if the stack is empty and false otherwise.
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // The size method returns the number of elements currently in the stack.
  size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Outputs: 20
console.log(numberStack.peek()); // Outputs: 10
console.log(numberStack.isEmpty()); // Outputs: false
console.log(numberStack.size()); // Outputs: 1