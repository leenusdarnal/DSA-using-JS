class Stack {
  #items; //to Make items variable private '#' is added
  constructor() {
    this.#items = [];
  }

  push(element) {
    this.#items.push(element);
  }
  pop() {
    return this.#items.pop();
  }
  peek() {
    return this.#items[this.#items.length - 1];
  }
  isEmpty() {
    return this.#items.length === 0;
  }
  size() {
    return this.#items.length;
  }
  print() {
    console.log(this.#items.toString());
  }
}
// Inputs
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.size());
console.log(stack.items);
