class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
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
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log(`index value should be 0<=index<=${this.size}`);
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }
  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      console.log(`index value should be 0<=index<=${this.size}`);
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      removeNode = current.next;
      current.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }
  removeByValue(value) {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log(`${value} is remove from List`);
      return value;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next !== null) {
        const removeNode = current.next;
        current.next = removeNode.next;
        this.size--;
        return value;
      }
      console.log(`${value} is not present on List`);
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return null;
    }
    // if (this.head.value === value) {
    //   console.log(`Item found at Head`);
    //   return { value: this.head.value, index: 0 };
    // }
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === value) {
        return { value: current.value, index: i };
      }
      current = current.next;
      i += 1;
    }
    console.log(`item not  found on List`);
    return null;
  }
  reverse() {
    if (this.isEmpty()) {
      console.log(`List is Empty`);
      return null;
    }
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let ahead = current.next;
      current.next = prev;
      prev = current;
      current = ahead;
    }
    this.head = prev;
    return;
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
list.prepend(10);
list.prepend(20);
list.prepend(30);
console.log(`List is Empty:${list.isEmpty()}`);
console.log(`List size is:${list.getSize()}`);
list.print();

list.append(100);
list.append(101);
list.append(102);
list.append(103);
list.print();

list.insertAt(999, 4);
list.print();
// console.log(list.removeFromIndex(7));
// console.log(list.removeByValue(90));
list.print();
console.log(`List size is:${list.getSize()}`);

console.log(list.search(999));

list.reverse();
list.print();
