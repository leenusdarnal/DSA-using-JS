class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
    } else {
      let current = this.head;
      let listValues = ' ';
      while (current !== null) {
        listValues += `${current.value} -> `;
        current = current.next;
      }
      console.log(`${listValues} NULL`);
    }
  }
}

// Inputs
const list = new LinkList();
console.log(`List is Empty:${list.isEmpty()}`);
console.log(`List size is:${list.getSize()}`);
list.append(10);
list.append(20);
list.append(30);
list.prepend(100);
console.log(`List is Empty:${list.isEmpty()}`);
console.log(`List size is:${list.getSize()}`);
list.print();
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
