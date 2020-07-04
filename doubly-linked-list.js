class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Push node
  push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    let temp = this.tail;
    this.tail = node;
    node.prev = temp;
    temp.next = node;
    this.size += 1;
  }

  // Pop node
  pop() {
    if (!this.size || !this.head) {
      console.log(this);
      return undefined;
    }
    let deleted;

    if (this.size === 0) {
      deleted = this.head;
      this.head = null;
      this.tail = null;
      return;
    }

    let tail = this.tail;
    this.tail = tail.prev;
    this.tail.next = null;
    tail.prev = null;
    this.size -= 1;
    return deleted;
  }

  // Unshift node 
  unshift(data) {
    let node = new Node(data);
    let prev = this.head;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.head = node;
    prev.prev = node;
    node.next = prev;

    this.size += 1;
  }

  // Shift node 
  shift() {
    if (!this.size || !this.head) return undefined;
    let temp = this.head;

    if (this.size === 1) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.head = temp.next;
    this.head.prev = null;

    this.size -= 1;
    return temp.data;
  }

  // Push at node
  pushAt(data, index) {
    if (this.size < index || index === 0 || index === this.size) return this;

    let node = new Node(data);
    let current = this.head;
    let prev;
    for(let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    node.prev = prev;
    node.next = current;
    prev.next = node;
    current.prev = node;
    current = node;
    this.size += 1;
  }

  remove(index) {
    if (this.size < index || index === 0 || index === this.size) return undefined;

    let current = this.head;
    let prev;
    for(let i = 0; i <= index; i++) {
      prev = current;
      current = current.next;
    }

    current.prev = current.prev.prev;
    current.prev.next = current;
    this.size -= 1;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Print list data
  printValues() {
    let current = this.head;

    if (!current) {
      return;
    }

    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const doublylinkedList = new DoublyLinkedList;
doublylinkedList.push(100);
doublylinkedList.push(200);
doublylinkedList.push(300);
doublylinkedList.push(400);
doublylinkedList.pushAt(500, 2);
doublylinkedList.remove(2);
doublylinkedList.printValues();
