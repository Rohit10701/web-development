export default class Stack {
    constructor() {
      this.stack = []
    }
  
    /**
     * Pushes an item onto the top of the stack.
     * @param {*} item The item to be pushed onto the stack.
     * @return {number} The new length of the stack.
     */
    push(item) {
      this.stack.push(item)
      return this.stack.length
    }
  
    /**
     * Remove an item at the top of the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    pop() {
      return this.stack.pop()
    }
  
    /**
     * Determines if the stack is empty.
     * @return {boolean} `true` if the stack has no items, `false` otherwise.
     */
    isEmpty() {
      return this.stack.length == 0
    }
  
    /**
     * Returns the item at the top of the stack without removing it from the stack.
     * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
     */
    peek() {
      return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined
    }
  
    /**
     * Returns the number of items in the stack.
     * @return {number} The number of items in the stack.
     */
    length() {
      return this.stack.length;
    }
  }


  const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false