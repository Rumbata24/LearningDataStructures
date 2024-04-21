// List full of elements linked to each other
// Every element knows only about the next element
// Every element don't know about the element in front of it

// This allows for efficient re-sizing and insertion
// at start and end of the list

// node => element in the linked list
// first node => Head
// last node => Tail

class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: this.head,
    };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = {
        value: value,
        next: existingNode.next,
      };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;

    while (currNode) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    while (currNode.next) {
      if (currNode.next.value === value) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }
  }

  toArray() {
    const elements = [];

    let currNode = this.head;
    while (currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }
    return elements;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append("hello");
LinkedList1.append("Rumen");
LinkedList1.append("Rumen");
LinkedList1.append(true);
LinkedList1.append(18.61);
LinkedList1.prepend("firstValue");
LinkedList1.prepend("firstValue");

console.log(LinkedList1.toArray());

LinkedList1.delete("Rumen");
LinkedList1.delete("firstValue");
LinkedList1.delete(18.61);

console.log(LinkedList1.toArray());
console.log(LinkedList1.find("Max"));
console.log(LinkedList1.find("hello"));

LinkedList1.insertAfter("new value - 1", 1);
LinkedList1.insertAfter("new value - 2", "hello");

console.log(LinkedList1.toArray());
