class CircluarQueue {
  #items;
  #capacity;
  #currentLength;
  #rear;
  #front;

  constructor(capacity) {
    this.#items = new Array(capacity);
    this.#capacity = capacity;
    this.#currentLength = 0;
    this.#rear = -1;
    this.#front = -1;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.#rear = (this.#rear + 1) % this.#capacity;
      this.#items[this.#rear] = element;
      this.#currentLength += 1;
      if (this.#front === -1) {
        this.#front = this.#rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.#items[this.#front];
    this.#items[this.#front] = null;
    this.#front = (this.#front + 1) % this.#capacity;
    this.#currentLength += 1;
    if (this.isEmpty()) {
      this.#front = -1;
      this.#rear = -1;
    }
    return item;
  }
  isFull() {
    return this.#currentLength === this.#capacity;
  }
  isEmpty() {
    return this.#currentLength === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.#items[this.#front];
    }
    return null;
  }
  size() {}
  print() {
    if (this.isEmpty()) {
      console.log('Queue is Empty');
    } else {
      let i;
      let str = '';
      for (i = this.#front; i !== this.#rear; i = (i + 1) % this.#capacity) {
        str = str + this.#items[i] + ' ';
      }
      str = str + this.#items[i];
      console.log(str);
    }
  }
}
// Inputs
const cqueue = new CircluarQueue(5);

console.log(cqueue.isEmpty());

cqueue.enqueue(10);
cqueue.enqueue(20);
cqueue.enqueue(30);
cqueue.enqueue(40);
cqueue.enqueue(50);

console.log(cqueue.isFull());
cqueue.print();

console.log(cqueue.dequeue());

console.log(cqueue.peek());
cqueue.enqueue(60);
cqueue.print();
