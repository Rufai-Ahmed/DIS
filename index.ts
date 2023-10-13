class noded {
  public val: number;
  public next: noded | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  public head: noded | null | any;
  public tail: noded | null | any;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val: number) {
    let node = new noded(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.tail;
      let newTail = current;

      while (current.next) {
        this.tail = newTail;
        this.tail.next = null;
      }

      this.length--;
      return current;
    }
  }

  removeHead() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.head;
      let newHead = current;

      while (current.next) {
        this.head = newHead;
        this.head.next = null;
      }

      this.length--;
      return current;
    }
  }

  insertHead(val: number) {
    let node = new noded(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else {
      let count = 0;
      let current = this.head;
      while (index !== count) {
        current = current.next;
        count++;
      }
      return current;
    }
  }
}

let linkList = new LinkList();
linkList.insert(2);
linkList.insert(3);
console.log(linkList.insert(5));
console.log(linkList.insert(6));
console.log(linkList.insert(8));
// console.log(linkList.remove());
console.log(linkList.insertHead(4));
console.log(linkList.removeHead());
console.log(linkList.remove());
