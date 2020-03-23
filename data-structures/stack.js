class Stack() {
  constructor() {
    this.items = [];
  }
  
  push(el) {
    this.items.push(el);
  }
  
  pop() {
    this.items.pop(el);
  }
  
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      return false;
    }
  }
  
  isEmpty() {
    return this.items.length > 0
  }
  
  getStack() {
    return this.items;
  }
}
