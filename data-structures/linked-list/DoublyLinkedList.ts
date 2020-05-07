/**
 * Doubly Linked List Node
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

  public set prev(node: DoublyLinkedListNode) {
    this._prev = node;
  }

  public get prev(): DoublyLinkedListNode {
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
 * Doubly Linked List
 */
export class DoublyLinkedList {
  private _head: DoublyLinkedListNode;
  private _tail: DoublyLinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public set head(node: DoublyLinkedListNode) {
    this._head = node;
  }
  public get head(): DoublyLinkedListNode {
    return this._head;
  }

  public set tail(node: DoublyLinkedListNode) {
    this._tail = node;
  }
  public get tail(): DoublyLinkedListNode {
    return this._tail;
  }

  /**
   * 链首新增元素
   */
  public prepend(v: any) {
    let node = new DoublyLinkedListNode(v);
  }

  /**
   * 链尾新增元素
   */
  public append() {}

  /**
   * 移除链尾节点，并返回
   */
  public pop() {}
  /**
   * 移除链首节点，并返回
   */
  public shift() {}
  /**
   * 根据值删除链
   */
  public delete(v: any) {}

  /**
   * 将数组转换成链表
   */
  public fromArray() {}

  /**
   * 将数链表换成组转
   */
  public toArray() {}

  /**
   * 链表翻转
   */
  public reverse() {}
}
