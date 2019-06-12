/**
 * DoublyLinkedList
 */
export class DoublyLinkedListNode {
  private _value: any; // current node value
  private _prev: DoublyLinkedListNode; // previous node
  private _next: DoublyLinkedListNode; // next node

  constructor(props: any) {
    this._value = props;
  }

  public set value(v: any) {
    this._value = v;
  }

  public get value(): any {
    return this._value;
  }

  public set pre(node: DoublyLinkedListNode) {
    this._prev = node;
  }
  public get pre(): DoublyLinkedListNode {
    return this._prev;
  }

  public set next(node: DoublyLinkedListNode) {
    this._next = node;
  }
  public get next(): DoublyLinkedListNode {
    return this._next;
  }

  public toString() {
    return `${this.value}`;
  }
}

/**
 * DoublyLinkedList
 */
export class DoublyLinkedList {
  private _head: DoublyLinkedListNode;
  private _tail: DoublyLinkedListNode;

  constructor() {
    this._head = null;
    this._tail = null;
  }

  public prepend() {}
  public append() {}

  public pop() {}
  public shift() {}
  public delete() {}

  public fromArray() {}
  public toArray() {}

  public reverse() {}
}
